import { MainContainerLayout } from "../common/ui/layout";
import { GetInTouchForm } from "./GetInTouchForm";

export function Contact() {
  async function SendMessageToMail(data: object) {
    "use server";

    const body = {
      ...data,
      access_key: "ad916a9e-3765-4d2f-bab2-abe394f916d7",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return !!result.success;
  }
  return (
    <MainContainerLayout as="section" id="contact">
      <div className="flex flex-col lg:flex-row lg:gap-20 xl:gap-32">
        <GetInTouchForm submitData={SendMessageToMail} />
        <div className="flex flex-col gap-4 lg:flex-1 lg:justify-center">
          <h2 className="text-3xl font-extrabold leading-relaxed lg:text-4xl xl:text-5xl">
            Let&apos;s
            <span className="font-outline-2 mx-4 text-bg shadow-primary">
              talk
            </span>{" "}
            for <br />
            something special
          </h2>
          <p className="text-zinc-500">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">
              <a href="mailto:mailskahayspatil@gmail.com">
                mailskahayspatil@gmail.com
              </a>
            </h3>
            <h3 className="text-xl font-semibold">
              <a href="tel:+917798197575">+91-7798197575</a>
            </h3>
          </div>
        </div>
      </div>
    </MainContainerLayout>
  );
}
