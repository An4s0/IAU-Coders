import { Register, Login } from "@/types/auth";
import cookies from "@/utils/cookies";
import axios from "axios";

interface ResponseRegisterFormat {
    result: string;
    msg: string;
    data: {
        user_name: string;
        user_email: string;
        created_at: Date;
    }
}
interface ResponseLoginFormat {
    result: string;
    msg: string;
    data: {
        name: string;
        email: string;
        token: string;
    }
};

interface ResponseCheckFormat {
    check: boolean;
}

const auth = {
    register: async (data: Register): Promise<ResponseRegisterFormat> => {
        try {
            const res = await axios.post<ResponseRegisterFormat>(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, data);

            const dataRes: ResponseRegisterFormat = await res.data;

            if (res.status >= 400) console.error(dataRes.msg || "Error in register");

            return dataRes;
        } catch (error: any) {
            console.error("Register error: ", error);
            return error.response.data;
        }
    },
    login: async (data: Login): Promise<ResponseLoginFormat> => {
        try {
            const res = await axios.post<ResponseLoginFormat>(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, data);

            const dataRes: ResponseLoginFormat = await res.data;

            if (res.status >= 400) console.error(dataRes.msg || "Error in login");

            cookies.set("token", dataRes.data.token, 7);

            return dataRes;
        } catch (error: any) {
            console.error("Login error: ", error);
            return error.response.data;
        }
    },
    logout: async (): Promise<boolean> => {
        try {
            cookies.remove("token");
            return true;
        } catch (error: any) {
            console.error("Logout error: ", error);
            return false;
        }
    },
    check: async (): Promise<ResponseCheckFormat> => {

        const token = cookies.get("token");

        return {
            check: !!token
        }

    }
}

export default auth;