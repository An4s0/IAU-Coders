export interface Register {
    name: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Verify {
    otp: string;
    email: string
}