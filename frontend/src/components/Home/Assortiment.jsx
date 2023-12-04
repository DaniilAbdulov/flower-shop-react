import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    selectAllProducts,
    selectCategories,
} from "../../redux/slices/productsSlice";
import ProductsList from "../Products/ProductsList";
import BorderedFrame from "../UI/BorderedFrame";
import "./Assortiment.scss";
import Loader from "../UI/Loader";

function Assortiment() {
    const [activeButton, setActiveButton] = useState("none");
    const allProducts = useSelector(selectAllProducts);
    const categories = useSelector(selectCategories);
    const handleButtonClick = (label) => {
        setActiveButton(label);
    };
    const arr = allProducts.length
        ? categories.length
            ? allProducts.filter((item) => item.category === activeButton)
            : []
        : [];
    useEffect(() => {
        if (categories.length) {
            setActiveButton(categories[0].label);
        }
    }, [categories]);
    return (
        <>
            <div className="wrapper" style={{ marginTop: "40px" }}>
                <div className="asrt">
                    <BorderedFrame
                        value="Наш ассортимент"
                        style={{ marginBottom: "50px" }}
                    />
                    {allProducts.length > 0 ? (
                        <>
                            <div className="asrt__buttons">
                                {categories && categories.length > 0
                                    ? categories.map((button) => (
                                          <button
                                              key={button.id}
                                              className={`asrt__btn ${
                                                  activeButton === button.label
                                                      ? "asrt__btn-active"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  handleButtonClick(
                                                      button.label
                                                  )
                                              }
                                          >
                                              {button.label}
                                          </button>
                                      ))
                                    : null}
                            </div>
                            <div className="asrt__cards">
                                <ProductsList items={arr} />
                            </div>
                        </>
                    ) : (
                        <div className="loader">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Assortiment;
