import React from "react";

const MenuToggle = ({ showMenu, handleMenuToggle }) => {
  return (
    <button className="block lg:hidden" onClick={handleMenuToggle}>
    </button>
  );
};

export default MenuToggle;