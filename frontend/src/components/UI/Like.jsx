import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { selectIsAuth, selectUserId } from "../../redux/slices/userSlice";
import {
    addToFavorites,
    deleteFromFavorites,
} from "../../redux/slices/changeProductsInfoSLice";
function Like({ like, id }) {
    const [isFavorite, setIsFavorite] = useState(like);
    const userId = useSelector(selectUserId);
    const productId = id;
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    function toggleFavorite() {
        if (isFavorite) {
            dispatch(deleteFromFavorites({ productId, userId }));
        } else {
            dispatch(addToFavorites({ productId, userId }));
        }
        setIsFavorite(!isFavorite);
    }
    useEffect(() => {
        setIsFavorite(like);
    }, [id, isAuth, userId, like]);
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
