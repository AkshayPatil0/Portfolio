import { Download } from "react-feather";
import { Button } from "./ui/button";

export function DownloadResumeBtn() {
  return (
    <Button
      label="Resume"
      suffix={<Download className="stroke-[3px]" size={16} />}
    />
  );
}
