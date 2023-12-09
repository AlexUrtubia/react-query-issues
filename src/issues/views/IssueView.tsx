import { Link, Navigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { useIssue } from "../hooks/useIssue";
import { tailspin } from "ldrs";
import { Loader } from "../components/loader/Loader";

tailspin.register();

export const IssueView = () => {
  const params = useParams();
  const { id = 0 } = params;
  console.log("🚀 ~ file: IssueView.tsx:18 ~ IssueView ~ id:", id)

  const { issueQuery, issueCommentsQuery } = useIssue(+id); // + convierte string a number, también podría usarse Number:id

  if (issueQuery.isLoading) {
    return (
      <Loader />
    );
  }

  if (!issueQuery.data) {
    return (
      <Navigate to="./issues/list" />
    );
  }
  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>
      <IssueComment issue={issueQuery.data} />
      {
        issueCommentsQuery.isLoading && (
          <Loader />
        )
      }
      {
        issueCommentsQuery.data?.map( comment => (
          <IssueComment key={comment.id} issue={comment} />
        ))
      }
    </div>
  );
};
