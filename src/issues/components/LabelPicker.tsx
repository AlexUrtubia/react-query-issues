import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const labelsQuery = useLabels();

  if (labelsQuery.labelsQuery.isLoading) {
    return (
      <div>
        <span
          className="badge rounded-pill m-1 label-picker"
          style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
        >
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div>
      {
        labelsQuery.labelsQuery.data?.map( label => (
          <span
            key={label.id}
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          >
            {label.name}
          </span>
        ))
      }
    </div>
  );
};
