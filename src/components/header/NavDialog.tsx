"use client";
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { DownloadResumeBtn } from "../common/DownloadResumeBtn";
import { ChevronRight, Menu } from "react-feather";
import { Modal } from "../common/ui";

export function NavDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <Menu size={24} />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex h-full w-full flex-col">
          <div className="flex justify-end p-8">
            <button onClick={() => setOpen(false)}>
              <ChevronRight />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-between py-8">
            <div className="flex flex-col items-center gap-8 font-semibold">
              <NavLinks />
            </div>
            <div>
              <DownloadResumeBtn />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
