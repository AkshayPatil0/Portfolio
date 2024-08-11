"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DELAY = 500;

export function Modal({
  open,
  onClose,
  children,
}: PropsWithChildren<{
  open: boolean;
  onClose: () => void;
}>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.show();
      document.body.classList.add("overflow-hidden");
    } else {
      setTimeout(() => dialogRef.current?.close(), DELAY);
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.dialog
          initial={{ left: "100%" }}
          animate={{ left: 0 }}
          exit={{ left: "100%" }}
          ref={dialogRef}
          onCancel={() => setTimeout(onClose, DELAY)}
          open
          className="h-screen w-screen fixed top-0 m-0"
        >
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
