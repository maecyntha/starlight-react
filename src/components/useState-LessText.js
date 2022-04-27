import React, { useState } from "react";

function LessText({ text, maxLength }) {
  const[hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  
  return (
    <span> 
      {/* substr() = yang diambil dari (n, m), sisanya dibuang */}
      {hidden ? `${text.substr(0, maxLength).trim()} ...`: text}
      <br />
      {hidden ? (
        <button onClick = {() => setHidden(false)} >--- read more ---</button>
      ) : (
        <button onClick = {() => setHidden(true)} >--- read less ---</button>
      )}
    </span>
  );
}

export default LessText;