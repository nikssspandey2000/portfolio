import React, { useState, useEffect } from "react";

function ToastComponent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer;

    // Define openToast function
    const openToast = () => {
      if (open) return;
      setOpen(true);

      // Clear previous timer
      clearTimeout(timer);

      // Set new timer to close toast after 5000 milliseconds (5 seconds)
      timer = setTimeout(() => {
        setOpen(false);
      }, 5000);
    };

    // Define closeToast function
    const closeToast = () => {
      setOpen(false);
    };

    // Return cleanup function to clear timer when component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <main className="min-w-screen grid min-h-screen place-items-center">
      <button
        type="button"
        onClick={() => setOpen(false)}
        style={{ display: open ? "block" : "none" }}
        className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
      >
        <div className="flex items-center space-x-2">
          <span className="text-3xl"><i className="bx bx-check"></i></span>
          <p className="font-bold">Item Created Successfully!</p>
        </div>
      </button>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600"
      >
        Launch toast
      </button>
    </main>
  );
}

export default ToastComponent;
