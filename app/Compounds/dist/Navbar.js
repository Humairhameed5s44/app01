"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function Navbar() {
    return (React.createElement("nav", { className: "bg-gray-800 p-4" },
        React.createElement("div", { className: "container mx-auto flex justify-between items-center" },
            React.createElement("div", { className: "text-white text-xl" },
                React.createElement(link_1["default"], { href: "/" }, "home")),
            React.createElement("div", { className: "hidden md:flex space-x-4" },
                React.createElement(link_1["default"], { href: "/", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" }, "Home"),
                React.createElement(link_1["default"], { href: "/about", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" }, "About"),
                React.createElement(link_1["default"], { href: "/services", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" }, "Services"),
                React.createElement(link_1["default"], { href: "/contact", className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" }, "Contact")))));
}
exports["default"] = Navbar;
;
