import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
    clearSuccess,
    selectSuccessMessage,
} from "../../redux/slices/successSlice";

const Success = () => {
    const successMessage = useSelector(selectSuccessMessage);

    const dispatch = useDispatch();
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(clearSuccess());
        }
    }, [successMessage, dispatch]);
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
export default Success;
