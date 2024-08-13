"use client";
import { Download } from "react-feather";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
import { downloadFile } from "@/src/lib/utils";

export function DownloadResumeBtn() {
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    downloadFile("/files/resume.pdf", "Akshay_Patil_Resume.pdf");
  };

  return (
    <Button
      label="Resume"
      suffix={<Download className="stroke-[3px]" size={16} />}
      onClick={onClick}
    />
  );
}
