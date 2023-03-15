import React from "react";

const ToastContext = React.createContext();

export const useToast = () => React.useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        dismissAllToast();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
