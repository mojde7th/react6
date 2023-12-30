import React from "react";
function Button({ cl, children,onClick, ...props }) {
  return (
    <button className={cl} {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
