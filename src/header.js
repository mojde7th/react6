import { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    const navlinks = {
      1: { title: "Home", path: "/Home" },
      2: { title: "About", path: "/About" },
      3: { title: "Blog", path: "/Blog" },
      4: { title: "Contact", path: "/Contact" },
    };
    return (
      <div className="flex justify-start bg-red-200">
        {Object.entries(navlinks).map(([index, item]) => {
          console.log(index);
          console.log(item.title);
          return (
            <span
              className="mx-8  border-b-2 p-3    border-transparent cursor-pointer hover:border-black transition"
              key={index}
            >
              {item.title}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Header;
