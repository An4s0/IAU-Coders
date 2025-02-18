import { Register, Login, Verify } from "@/types/auth";
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

interface ResponseVerifyFormat {
    result: string;
    msg: string;
}

interface ResponseCheckFormat {
    result: string;
    msg: string;
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
    verify: async (data: Verify): Promise<ResponseVerifyFormat> => {
        try {
            const res = await axios.post<ResponseVerifyFormat>(`${process.env.NEXT_PUBLIC_BASE_URL}/verify`, data);

            const dataRes: ResponseVerifyFormat = await res.data;

            if (res.status >= 400) console.error(dataRes.msg || "Error in verify");

            return dataRes;
        } catch (error: any) {
            console.error("Verify error: ", error);
            return error.response.data;
        }
    },
    check: async (): Promise<ResponseCheckFormat> => {
        const token = cookies.get("token");

        const res = await axios.post<ResponseCheckFormat>(`${process.env.NEXT_PUBLIC_BASE_URL}/verify`, {
            headers: {
                header: `Authorization: Bearer ${token}`
            }
        });

        const dataRes: ResponseCheckFormat = await res.data;

        return dataRes;
    }
}

export default auth;