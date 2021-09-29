import React from "react";

const NdcUserModifiers = ({ modifiers, setModifiers }) => {
  const onModifierChange = (e, affix) => {
    setModifiers({ ...modifiers, [affix]: e.target.value });
  };
  return (
    <div>
      <label> Prefix</label>
      <input
        value={modifiers.prefix}
        onChange={(e) => onModifierChange(e, "prefix")}
      ></input>
      <label> Dash</label>
      <input
        value={modifiers.dash}
        onChange={(e) => onModifierChange(e, "dash")}
      ></input>
      <label>Suffix</label>
      <input
        value={modifiers.suffix}
        onChange={(e) => onModifierChange(e, "suffix")}
      ></input>
    </div>
  );
};

export default NdcUserModifiers;
