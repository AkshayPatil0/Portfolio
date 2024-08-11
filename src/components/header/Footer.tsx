import { MainContainerLayout } from "../common/ui/layout";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <MainContainerLayout
      as="footer"
      className="flex flex-row items-center justify-between gap-8 bg-primary py-4 text-bg"
    >
      <Logo />
      <div>
        <p>@2024 Personal</p>
        <p className="flex flex-col items-start md:flex-row">
          <span>Design Inspiration</span>
          <a
            className="text-blue-500 md:pl-2"
            href="https://www.figma.com/@jhanvishah"
          >
            @jhanvishah
          </a>
        </p>
      </div>
    </MainContainerLayout>
  );
}
