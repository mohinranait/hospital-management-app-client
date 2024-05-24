"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const GlobalModal = ({ isOpen, setIsOpen, children, css }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-5">
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default GlobalModal;
