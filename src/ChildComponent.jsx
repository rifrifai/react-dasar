import { memo } from "react";
function ChildComponent(props) {
  console.info(`Child Component Rendered`);
  return (
    <>
      <h3>Company Name : {props.name}</h3>
      <button onClick={props.aksi}>Change Company</button>
    </>
  );
}

export default memo(ChildComponent);
