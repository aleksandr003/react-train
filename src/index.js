import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";
// import "./index.css";

// const div = document.createElement("div"); /// const div = React.createElement('div');
// const root = document.getElementById("root");
// root.append(div);                          ///  ReactDOM.createRoot(root).render(div);
/////==================== Analogue
// const root = document.getElementById("root");
// const text = React.createElement("p", {
//   className: "text",
//   children: ["hello, I am text"],
// });
// const li = React.createElement("li", { className: "item", children: ["item"] });
// const ul = React.createElement("ul", { className: "list", children: [li] });
// const div = React.createElement("div", {
//   className: "block-class",
//   id: "block-id",
//   children: [text, ul],
// });
const Cart = () => {
  return data.map((photo) => {
    return (
      <div className="card" key={photo.id} style={{ width: "18rem" }}>
        <img src={photo.url} className="card-img-top" alt={photo.title} />
        <div className="card-body">
          <h5 className="card-title">{photo.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="http" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};

ReactDOM.createRoot(document.getElementById("root")).render(<Cart />);
//

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
