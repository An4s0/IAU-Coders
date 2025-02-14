'use client';
import { useState } from "react";
import MainLayout from "@/components/layout/Main";
import { FaCode } from "react-icons/fa";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import auth from "@/utils/auth";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onPress = async () => {
        setError("");

        if (!data.email || !data.password || (!isLogin && !data.name)) return setError("Please fill all fields");
        if (!data.email.includes("@")) return setError("Invalid email format");
        if (!isLogin && data.name.length < 3) return setError("Name must be at least 3 characters");
        if (data.password.length < 8) return setError("Password must be at least 8 characters");
        if (data.password.length > 72) return setError("Password must be at most 72 characters");
        if (!/[A-Z]/.test(data.password)) return setError("Password must contain at least one uppercase letter");
        if (!/[a-z]/.test(data.password)) return setError("Password must contain at least one lowercase letter");
        if (!/[0-9]/.test(data.password)) return setError("Password must contain at least one number");

        let authRes;
        if (isLogin) authRes = await auth.login(data);
        else authRes = await auth.register(data);

        if (authRes.result === "FAILED") return setError(authRes.msg);
    }

    return (
        <MainLayout>
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                <div className="w-96 rounded-xl flex flex-col p-5 space-y-4">
                    <h1 className="text-2xl font-bold text-center">
                        Welcome to IAU Coders
                    </h1>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {!isLogin && <Input label="Name" placeholder="Enter your name" onChange={(e) => setData({ ...data, name: e.target.value })} />}
                    <Input label="Email" placeholder="Enter your email" onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <Input label="Password" placeholder="Enter your password" type="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
                    <Button onPress={onPress}>
                        {isLogin ? "Sign in" : "Sign up"}
                    </Button>
                    <p className="text-center">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <span
                            className="text-blue-500 cursor-pointer ml-3"
                            onClick={() => { setIsLogin(!isLogin); setError("") }}
                        >
                            {isLogin ? "Sign up" : "Sign in"}
                        </span>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}