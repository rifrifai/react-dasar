import { memo } from "react";
function ChildComponent(props) {
  console.info(`Child Component Rendered`);
  return (
    <>
      <h3>Company Name : {props.name}</h3>
    </>
  );
}

export default memo(ChildComponent);
