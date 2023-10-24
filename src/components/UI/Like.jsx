import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Like({ like }) {
    const [isFavorite, setIsFavorite] = useState(like);
    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    }
    return (
        <div>
            <button onClick={toggleFavorite}>
                {isFavorite ? (
                    <>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: "#a32e2e" }}
                        />
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: "#FFFFFF" }}
                        />
                    </>
                )}
            </button>
        </div>
    );
}
export default Like;
