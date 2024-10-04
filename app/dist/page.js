"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Navbar_1 = require("./Compounds/Navbar");
function Coun() {
    return (React.createElement("div", null,
        React.createElement(Navbar_1["default"], null),
        React.createElement("h1", null, "Countrys"),
        React.createElement(link_1["default"], { href: "/Countrys/Afganistan" }, "Afghanistan"),
        "\u00A0|\u00A0",
        React.createElement(link_1["default"], { href: "/Countrys/India" }, "India"),
        "\u00A0|\u00A0",
        React.createElement(link_1["default"], { href: "/Countrys/Iran" }, "Iran"),
        "\u00A0|\u00A0",
        React.createElement(link_1["default"], { href: "/Countrys/Pakistan" }, "Pakistan"),
        "\u00A0|\u00A0",
        React.createElement(link_1["default"], { href: "/Countrys/Russia" }, "Russia"),
        "\u00A0|\u00A0"));
}
exports["default"] = Coun;
