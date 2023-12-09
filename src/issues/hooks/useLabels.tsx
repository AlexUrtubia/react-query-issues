import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/guthubApi";
import { Label } from "../interfaces/label";
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(3);
  const { data } = await githubApi.get<Label[]>("/labels");
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: () => getLabels(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 10,
    // initialData: [],  // Considera esta data como la más fresca si es que se ha definido un staleTime
    // placeholder solo se mostrará cuando la data se está cargando, initialdata se considera un dato fresco
    placeholderData: [
      {
        id: 52079258,
        node_id: "MDU6TGFiZWw1MjA3OTI1OA==",
        url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter",
        name: "Difficulty: starter",
        color: "94ce52",
        default: false,
        description: "null",
      },
      {
        id: 588833528,
        node_id: "MDU6TGFiZWw1ODg4MzM1Mjg=",
        url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20medium",
        name: "Difficulty: medium",
        color: "fbca04",
        default: false,
        description: "null"
      },
    ],
  });
	return { labelsQuery };
};



// {
//   "id": 717031390,
//   "node_id": "MDU6TGFiZWw3MTcwMzEzOTA=",
//   "url": "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
//   "name": "good first issue",
//   "color": "6ce26a",
//   "default": true,
// },