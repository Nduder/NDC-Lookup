import React from "react";

const NdcUserModifiers = ({ modifiers, setModifiers }) => {
  return (
    <div>
      <label> Prefix</label>
      <input
        value={modifiers.prefix}
        onChange={(e) => {
          const model = {
            ...modifiers,
            prefix: e.target.value,
          };
          setModifiers(model);
        }}
      ></input>
      <label> Dash</label>
      <input
        value={modifiers.dash}
        onChange={(e) => {
          const model = {
            ...modifiers,
            dash: e.target.value,
          };
          setModifiers(model);
        }}
      ></input>
      <label>Suffix</label>
      <input
        value={modifiers.suffix}
        onChange={(e) => {
          const model = {
            ...modifiers,
            suffix: e.target.value,
          };
          setModifiers(model);
        }}
      ></input>
    </div>
  );
};

export default NdcUserModifiers;
