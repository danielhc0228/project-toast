import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [variant, setVariant] = React.useState("warning");
    const [message, setMessage] = React.useState("");
    const [isRendered, setIsRendered] = React.useState(false);

    function handleDismiss() {
        setIsRendered(false);
    }
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt='Cute toast mascot' src='/toast.png' />
                <h1>Toast Playground</h1>
            </header>
            {isRendered && (
                <Toast
                    message={message}
                    variant={variant}
                    handleDismiss={handleDismiss}
                />
            )}
            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor='message'
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id='message'
                            className={styles.messageInput}
                            value={message}
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((option) => {
                            let id = `varient-${option}`;
                            return (
                                <label htmlFor={id} key={id}>
                                    <input
                                        id={option}
                                        type='radio'
                                        name='variant'
                                        value={option}
                                        checked={option === variant}
                                        onChange={(event) => {
                                            setVariant(event.target.value);
                                        }}
                                    />
                                    {option}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button onClick={() => setIsRendered(true)}>
                            Pop Toast!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
