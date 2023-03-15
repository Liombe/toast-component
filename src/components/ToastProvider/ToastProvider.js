import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key.hook";

const ToastContext = React.createContext();

export const useToast = () => React.useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(dismissAllToast);

  function addToast(variant, message) {
    setToasts([...toasts, { id: new Date(), variant, message }]);
  }

  function dismissToast(toastId) {
    const nextToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(nextToasts);
  }

  function dismissAllToast() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, dismissToast, dismissAllToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
