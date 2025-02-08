import { Code2, Command, Cpu } from "lucide-react";
import Challenge from "@/types/Challenge";


const challenges: Challenge[] = [
    {
        icon: <Code2 className="w-10 h-10" />,
        name: "API Integration Challenge",
        description: "Build a full-stack application that integrates with external APIs and handles real-time data.",
        languagesSupport: ["TypeScript", "Python", "Go"],
    },
    {
        icon: <Command className="w-10 h-10" />,
        name: "UI Component Library",
        description: "Create a reusable component library with comprehensive documentation and testing.",
        languagesSupport: ["React", "Vue", "Svelte"],
    },
    {
        icon: <Cpu className="w-10 h-10" />,
        name: "CLI Tool Development",
        description: "Develop a command-line tool that improves developer workflow and productivity.",
        languagesSupport: ["Node.js", "Rust", "Python"],
    },
];

export default challenges;