import "./ConfirmModal.css";

function ConfirmModal({
    isOpen,
    title = "Are you sure?",
    message,
    confirmText = "Delete",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    danger = true,
}) {
    if (!isOpen) return null;

    return (
        <div className="confirm-modal__overlay" onClick={onCancel}>
            <div
                className="confirm-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="confirm-modal__content">
                    <h2 id="confirm-modal-title">{title}</h2>

                    <p>{message}</p>
                </div>

                <div className="confirm-modal__actions">
                    <button
                        type="button"
                        className="confirm-modal__cancel"
                        onClick={onCancel}
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        className={`confirm-modal__confirm ${
                            danger ? "confirm-modal__confirm--danger" : ""
                        }`}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;