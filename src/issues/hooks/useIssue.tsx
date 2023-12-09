import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/guthubApi';
import { Issue } from '../interfaces/issue';
import { sleep } from '../../helpers/sleep';

const getIssueInfo = async ( issueNumber: number ): Promise<Issue> => {
    const { data } = await githubApi.get(`/issues/${issueNumber}`);
    console.log("🚀 ~ file: useIssue.tsx:7 ~ getIssueInfo ~ data:", data)
    return data
}

const getIssueComments = async ( issueNumber: number ): Promise<Issue> => {
    await sleep(3);
    const { data } = await githubApi.get(`/issues/${issueNumber}/comments`);
    console.log("🚀 ~ file: useIssue.tsx:14 ~ getIssueComments ~ data:", data)
    return data
}

export const useIssue = ( issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ["issue", issueNumber],
        queryFn: () => getIssueInfo(issueNumber),
    })

    const issueCommentsQuery = useQuery({
        queryKey: ["issue", issueNumber, "comments"],
        queryFn: () => getIssueComments(issueQuery.data!.number),
        enabled: issueQuery.data !== undefined,
    })
    return { issueQuery, issueCommentsQuery }
}
