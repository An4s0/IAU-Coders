'use client';
import { useState } from "react";
import MainLayout from "@/components/layout/Main";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { InputOtp } from "@heroui/input-otp";
import auth from "@/utils/auth";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [isOTP, setIsOTP] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [otp, setOtp] = useState("")

    const onPressSign = async () => {
        setError("");

        if (!data.email || !data.password || (!isLogin && !data.name)) return setError("Please fill all fields");
        if (!data.email.includes("@")) return setError("Invalid email format");
        if (!isLogin && data.name.length < 3) return setError("Name must be at least 3 characters");
        if (data.password.length < 8) return setError("Password must be at least 8 characters");
        if (data.password.length > 72) return setError("Password must be at most 72 characters");
        if (!/[A-Z]/.test(data.password)) return setError("Password must contain at least one uppercase letter");
        if (!/[a-z]/.test(data.password)) return setError("Password must contain at least one lowercase letter");
        if (!/[0-9]/.test(data.password)) return setError("Password must contain at least one number");
        if (!isLogin && data.password !== data.confirmPassword) return setError("Passwords do not match");

        const authRes = await auth.verify({ otp, email: data.email });

        if (authRes.result === "SUCCESS") return setIsOTP(!isOTP);
    }

    const onPress = async () => {
        setError("")

        if (otp.length != 6) return setError("OTP should be 6 numbers")

        let authRes;
        if (isLogin) authRes = await auth.login(data);
        else authRes = await auth.register(data);

        if (authRes.result === "FAILED") return setError(authRes.msg);
        if (authRes.result === "SUCCESS") return window.location.href = "/";
    }

    return (
        <MainLayout>
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                <div className="w-96 rounded-xl flex flex-col p-5 space-y-4">
                    <h1 className="text-2xl font-bold text-center">
                        Welcome to IAU Coders
                    </h1>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {isOTP ? (
                        <div className="flex flex-col justify-center items-center gap-3">
                            <InputOtp length={6} value={otp} onValueChange={setOtp} variant='underlined' />
                            <Button className="bg-color text-background hover:bg-hover w-9/12" onPress={onPress} >
                                {isLogin ? "Sign in" : "Sign up"}
                            </Button>
                        </div>
                    ) : (
                        <>
                            {!isLogin && <Input label="Name" placeholder="Enter your name" variant="underlined" onChange={(e) => setData({ ...data, name: e.target.value })} />}
                            <Input label="Email" placeholder="Enter your email" variant="underlined" onChange={(e) => setData({ ...data, email: e.target.value })} />
                            <Input label="Password" placeholder="Enter your password" type="password" variant="underlined" onChange={(e) => setData({ ...data, password: e.target.value })} />
                            {!isLogin && <Input label="Confirm Password" placeholder="Confirm your password" type="password" variant="underlined" onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} />}

                            <Button className="bg-color text-background hover:bg-hover" onPress={onPressSign} >
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
                        </>
                    )}
                </div>
            </div>
        </MainLayout >
    );
}