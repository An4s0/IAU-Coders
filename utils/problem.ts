import { ProblemList } from "@/types/problem";

interface ResponseProblemListFormat {
    result: string;
    msg: string;
    data: {
        id: number;
        title: string;
        difficulty: string;
        tags: string[];
        time_limit: number;
        memory_limit: number;
    }[]
}

interface ResponseSingleProblemFormat {
    result: string;
    msg: string;
    data: {
        id: number;
        title: string;
        difficulty: string;
        description: string;
        tags: string[];
        time_limit: number;
        memory_limit: number;
    }
}

const problem = {
    list: async (data: ProblemList): Promise<ResponseProblemListFormat> => {


        return {
            result: "success",
            msg: "Successfully fetched problems",
            data: [
                {
                    id: 1,
                    title: "Two Sum",
                    difficulty: "easy",
                    tags: ["array", "hash table"],
                    time_limit: 1000,
                    memory_limit: 1024
                },
                {
                    id: 2,
                    title: "Add Two Numbers",
                    difficulty: "medium",
                    tags: ["linked list", "math"],
                    time_limit: 2000,
                    memory_limit: 2048
                },
                {
                    id: 3,
                    title: "Longest Substring Without Repeating Characters",
                    difficulty: "medium",
                    tags: ["hash table", "two pointers", "string"],
                    time_limit: 3000,
                    memory_limit: 3072
                },
                {
                    id: 4,
                    title: "Median of Two Sorted Arrays",
                    difficulty: "hard",
                    tags: ["array", "binary search", "divide and conquer"],
                    time_limit: 4000,
                    memory_limit: 4096
                }
            ]
        }
    },
    single: async (id: number): Promise<ResponseSingleProblemFormat> => {

        return {
            result: "success",
            msg: "Successfully fetched problem",
            data: {
                id: 1,
                title: "Two Sum",
                difficulty: "easy",
                description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
                tags: ["array", "hash table"],
                time_limit: 1000,
                memory_limit: 1024
            }
        }
    }
}

export default problem;