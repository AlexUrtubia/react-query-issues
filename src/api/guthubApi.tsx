import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: `Bearer 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`,
    }
})