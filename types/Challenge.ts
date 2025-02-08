import { ReactNode } from "react";

export default interface Challenge {
    icon: ReactNode;
    name: string;
    description: string;
    languagesSupport: string[];
}