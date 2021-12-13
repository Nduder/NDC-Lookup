import React from "react";

const NdcUserModifiers = ({ modifiers, setModifiers }) => {
  const onModifierChange = (e, affix) => {
    setModifiers({ ...modifiers, [affix]: e.target.value });
  };
  return (
    <div className="modifiers-container">
      <div className="modifier">
        <a className="fix">Prefix</a>
        <input
          className="search-input modifier-input"
          value={modifiers.prefix}
          onChange={(e) => onModifierChange(e, "prefix")}
        ></input>
      </div>
      <div className="modifier">
        <a className="fix">Dash</a>
        <input
          className="search-input modifier-input"
          value={modifiers.dash}
          onChange={(e) => onModifierChange(e, "dash")}
        ></input>
      </div>
      <div className="modifier">
        <a className="fix">Suffix</a>
        <input
          className="search-input modifier-input"
          value={modifiers.suffix}
          onChange={(e) => onModifierChange(e, "suffix")}
        ></input>
      </div>
    </div>
  );
};

export default NdcUserModifiers;
