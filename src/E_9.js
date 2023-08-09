import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 9) display 3 dish in one line (each dish has name,price,description,weight) function & Bootstrap

const root = ReactDOM.createRoot(document.getElementById("root"));
function menu(menubar) {
  var marksheet = (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header text-primary fw-bold"><p>{menubar.Name}</p></div>
            <div className="card-body">
              <ul>
                <li>{menubar.Name}</li>
                <li>{menubar.Description}</li>
                <li className="text-danger">{menubar.Weight}</li>
              </ul>
              </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header text-primary fw-bold"><p>{menubar.Name2}</p></div>
            <div className="card-body">
              <ul>
                <li>{menubar.Name2}</li>
                <li>{menubar.Description2}</li>
                <li className="text-danger">{menubar.Weight2}</li>
              </ul>
              </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header text-primary fw-bold"><p>{menubar.Name3}</p></div>
            <div className="card-body">
              <ul>
                <li>{menubar.Name3}</li>
                <li>{menubar.Description3}</li>
                <li className="text-danger">{menubar.Weight3}</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
  return marksheet;
}

var menubar = {
  Name: "Panir Tika",
  Description: "Description:Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven. Worry not if you don’t have an oven – instead of grilling in oven, you can make Paneer Tikka Recipe on stovetop on a tawa/skillet. In this post I am sharing both the oven and stovetop methods",
  Weight: "250 gm",
  Name2: "Kaju Masala",
  Description2:"Kaju curry is a restaurant style delicious recipe of a creamy kaju butter masala with a rich, tangy, sweet flavorful gravy made with cashews, tomatoes, cream and spices. Kaju is the Hindi word for cashews. This recipe of kaju masala has an overload of cashews as they are added twice during the cooking process. Serve with roti, naan, paratha or steamed rice for a sumptuous and filling lunch or dinner.",
  Weight2: "250 gm",

  Name3: "Paneer Butter Masala",
  Description3: "Paneer Butter Masala Recipe is one of India’s most popular paneer preparation. This restaurant style recipe with soft paneer cubes dunked in a creamy, lightly spiced tomato sauce or gravy is a best one that I have been making for a long time. This rich dish is best served with roti or chapati, paratha, naan or rumali roti",
  Weight3: "250 gm",
  
};
root.render(menu(menubar));
