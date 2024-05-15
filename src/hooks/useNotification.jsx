import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useNotification = () => {
  const [notificationConfig, setNotificationConfig] = useState({
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notify = (message, options) => {
    const mergedOptions = { ...notificationConfig, ...options };
    toast(message, mergedOptions);
  };

  return { notify };
};

export default useNotification;
