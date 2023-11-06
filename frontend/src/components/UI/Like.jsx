import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { selectIsAuth } from "../../redux/slices/userSlice";
function Like({ like, id }) {
    const [isFavorite, setIsFavorite] = useState(like);
    const isAuth = useSelector(selectIsAuth);
    function toggleFavorite() {
        if (isFavorite) {
            alert(`Карточка с id ${id} удалена из избранного`);
        } else {
            alert(`Карточка с id ${id} добавлена в избранноe`);
        }
        setIsFavorite(!isFavorite);
    }
    return (
        <div>
            {isAuth && (
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
            )}
            {!isAuth && <></>}
        </div>
    );
}
export default Like;
