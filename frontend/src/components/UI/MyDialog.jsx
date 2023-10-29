import "./MyDialog.scss";
function MyDialog({ visible, setVisible, children }) {
    return (
        <>
            <div
                className={`dialog${visible ? " active" : ""}`}
                onClick={() => setVisible(false)}
            >
                <div
                    className="dialog__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>
    );
}
export default MyDialog;
