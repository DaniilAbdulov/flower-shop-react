import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./ScrollButton.scss";

const ScrollButton = ({ value, targetRef }) => {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(false);
        } else if (scrolled <= 100) {
            setVisible(true);
        }
    };

    const scrollToComponent = () => {
        targetRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button className="scrollbutton">
            {value}
            <FaArrowDown
                onClick={scrollToComponent}
                style={{
                    display: visible ? "inline" : "none",
                    marginTop: "10px",
                }}
            />
        </button>
    );
};

export default ScrollButton;
