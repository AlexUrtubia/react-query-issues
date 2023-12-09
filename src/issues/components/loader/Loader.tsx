import { tailspin } from "ldrs";

tailspin.register();
export const Loader = () => {
  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <l-tailspin size="40" stroke="5" speed="0.9" color="black" />
      </div>
    </div>
  );
};
