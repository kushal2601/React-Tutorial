import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement("h1", {id : "heading"}, "Hello World by React");
root.render(<Header />);