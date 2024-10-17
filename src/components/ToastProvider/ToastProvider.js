import React, { Children } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    function createToast(message, variant) {
        const nextToast = [
            ...toasts,
            {
                id: crypto.randomUUID(),
                message,
                variant,
            },
        ];

        setToasts(nextToast);
    }

    function handleDismiss(id) {
        const nextToasts = toasts.filter((toast) => {
            return toast.id !== id;
        });

        setToasts(nextToasts);
    }

    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === "Escape") {
                setToasts([]);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
