import { NavLinks } from "./NavLinks";
import { NavDialog } from "./NavDialog";
import { DownloadResumeBtn } from "../common/DownloadResumeBtn";
import { MainContainerLayout } from "../common/ui/layout";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <MainContainerLayout
      as="header"
      className="flex items-center justify-between bg-bg py-4 text-primary lg:py-8"
    >
      <Logo />
      <div className="hidden gap-8 font-semibold lg:flex">
        <NavLinks />
      </div>
      <div className="hidden lg:flex">
        <DownloadResumeBtn />
      </div>
      <div className="lg:hidden">
        <NavDialog />
      </div>
    </MainContainerLayout>
  );
}
