import { ProblemList } from "@/types/problem";

interface ResponseProblemListFormat {
    result: string;
    msg: string;
    data: [
        {
            id: number;
            title: string;
            difficulty: string;
            tags: string[];
            time_limit: number;
            memory_limit: number;
        }
    ]
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

    },
    single: async (id: number): Promise<ResponseSingleProblemFormat> => {

    }
}

export default problem;