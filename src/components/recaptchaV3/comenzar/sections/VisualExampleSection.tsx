import CustomContainer from "@/components/common/CustomContainer";
import { useTranslations } from "@/i18n/utils";
import {
  ReCaptchaV3,
  type RecaptchaV3Ref,
  TRANSACTIONAL_ACTIONS,
} from "google-react-recaptcha-v3";
import { useRef, useState } from "react";

interface Props {
  lang?: "es" | "en" | "fr" | "it" | "pt" | "pt-BR" | "ja" | "ko";
}

export default function VisualExampleSection({ lang = "es" }: Props) {
  const [console, setConsole] = useState("");
  const recaptchaRef = useRef<RecaptchaV3Ref>(null);
  const t = useTranslations(lang);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Execute reCAPTCHA verification
    const token = await recaptchaRef.current?.execute();

    if (token) {
      // Send token to your backend for verification
      setConsole(token);
    }
  };

  const handleRecaptchaSuccess = (token: string) => {
    setConsole(token);
  };

  const handleRecaptchaError = (error: unknown) => {
    setConsole(error as string);
  };

  return (
    <section className="max-w-5xl text-white50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <CustomContainer className="px-6 py-3 max-w-[400px] md:w-[320px] xl:w-[400px] space-y-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#FF4444]"></div>
            <div className="h-5 w-5 rounded-full bg-[#F4FF5C]"></div>
            <div className="h-5 w-5 rounded-full bg-[#45FF42]"></div>
          </div>
        </div>
        <h3 className="text-2xl text-white70 font-bold">
          {t("start.visual.title")}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-white50 font-bold text-base" htmlFor="email">
              {t("start.visual.email")}
            </label>
            <div className="bg-white/10 rounded-xl h-8 px-2 mt-1">
              <input
                id="email"
                name="email"
                className="h-full w-full outline-none text-sm"
                type="email"
                placeholder={t("start.visual.email.placeholder")}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div>
            <label
              className="text-white50 font-bold text-base"
              htmlFor="password"
            >
              {t("start.visual.password")}
            </label>
            <div className="bg-white/10 rounded-xl px-2 h-8 mt-1">
              <input
                id="password"
                name="password"
                className="h-full w-full outline-none text-sm"
                type="password"
                placeholder={t("start.visual.password.placeholder")}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="rounded-xl text-base font-medium text-white70 h-12 px-3 hover:bg-customGray/80 hover:scale-105 cursor-pointer w-fit bg-customGray transition-transform duration-100"
              type="submit"
            >
              {t("start.visual.submit")}
            </button>
          </div>
          <ReCaptchaV3
            ref={recaptchaRef}
            siteKey={import.meta.env.PUBLIC_RECAPCHAT_KEY}
            action={TRANSACTIONAL_ACTIONS.LOGIN} // ⚠️ Advertencia: no usar autoExecute // No es necesario usar TRANSACTIONAL_ACTIONS, puedes escribir la acción que quieras
            autoExecute={false} // Recomendado para acciones transaccionales
            onVerify={handleRecaptchaSuccess}
            onError={handleRecaptchaError}
          />
        </form>
        <p className="text-base text-white50 font-bold text-center">
          {t("start.visual.author")}{" "}
          <a
            href="https://www.linkedin.com/in/andresh11/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Andrés Hernández
          </a>
        </p>
      </CustomContainer>
      <CustomContainer className="px-6 py-3 max-w-[400px] md:w-[320px] xl:w-[400px] space-y-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#FF4444]"></div>
            <div className="h-5 w-5 rounded-full bg-[#F4FF5C]"></div>
            <div className="h-5 w-5 rounded-full bg-[#45FF42]"></div>
          </div>
        </div>
        <h3 className="text-2xl text-white70 font-bold">
          {t("start.visual.console")}
        </h3>
        <div className="bg-white/10 w-full h-full rounded-xl px-2 text-white50">
          <textarea
            placeholder={t("start.visual.console.placeholder")}
            readOnly
            rows={10}
            className="w-full h-full outline-none bg-transparent resize-none scrollbar-hide"
            value={console}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
