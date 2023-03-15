import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            dismissToast={() => dismissToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
