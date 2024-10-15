import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
    const { toasts } = React.useContext(ToastContext);
    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast) => (
                <li key={toast.id} className={styles.toastWrapper}>
                    <Toast
                        id={toast.id}
                        message={toast.message}
                        variant={toast.variant}
                    ></Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
