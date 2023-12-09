import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/guthubApi"
import { Issue } from "../interfaces/issue"

const getIssues = async () : Promise<Issue> => {
    const { data } = await githubApi.get<Issue>("/issues")
    console.log("🚀 ~ file: useIssues.tsx:5 ~ getIssues ~ data:", data)
    return data
}
export const useIssues = () => {

  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: () => getIssues(),
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 10,
  })

  return { issuesQuery }
}
