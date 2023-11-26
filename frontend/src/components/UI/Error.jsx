import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";

const Error = () => {
    const errorMessage = useSelector(selectErrorMessage);

    const dispatch = useDispatch();
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(clearError());
        }
    }, [errorMessage, dispatch]);
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
};
export default Error;
