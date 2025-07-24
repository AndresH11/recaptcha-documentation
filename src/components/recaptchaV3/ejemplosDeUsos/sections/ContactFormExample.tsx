import CustomContainer from "@/components/common/CustomContainer";
import { useTranslations } from "@/i18n/utils";
import { type RecaptchaV3Ref, ReCaptchaV3 } from "google-react-recaptcha-v3";
import { useRef, useState } from "react";

interface Props {
  lang?: "es" | "en" | "fr" | "it" | "pt" | "pt-BR" | "ja" | "ko";
}

export const ContactFormExample = ({ lang = "es" }: Props) => {
  const [console1, setConsole1] = useState("");
  const t = useTranslations(lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<RecaptchaV3Ref>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Ejecutar reCAPTCHA antes de enviar
      const token = await recaptchaRef.current?.execute();

      if (!token) {
        throw new Error("No se pudo obtener el token de reCAPTCHA");
      }

      setConsole1(token);
      // Enviar formulario con token
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      if (response.ok) {
        alert(t("examples.contact.success"));
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("examples.contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl text-white50 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <CustomContainer className="px-6 py-3 max-w-[400px] md:w-[320px] xl:w-[400px] space-y-4">
        <div className="space-y-4">
          {/* Decoración de ventana */}
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FF4444]"></div>
              <div className="h-5 w-5 rounded-full bg-[#F4FF5C]"></div>
              <div className="h-5 w-5 rounded-full bg-[#45FF42]"></div>
            </div>
          </div>

          {/* Título */}
          <h3 className="text-2xl text-white70 font-bold">
            {t("examples.contact.title")}
          </h3>

          {/* Formulario */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Campo Nombre */}
            <div>
              <label
                className="text-white50 font-bold text-base"
                htmlFor="name"
              >
                {t("examples.contact.name")}
              </label>
              <div className="bg-white/10 rounded-xl h-10 px-3 mt-1">
                <input
                  id="name"
                  type="text"
                  className="h-full w-full outline-none text-sm bg-transparent text-white70 placeholder-white50"
                  placeholder={t("examples.contact.name.placeholder")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Campo Email */}
            <div>
              <label
                className="text-white50 font-bold text-base"
                htmlFor="email"
              >
                {t("examples.contact.email")}
              </label>
              <div className="bg-white/10 rounded-xl h-10 px-3 mt-1">
                <input
                  id="email"
                  type="email"
                  className="h-full w-full outline-none text-sm bg-transparent text-white70 placeholder-white50"
                  placeholder={t("examples.contact.email.placeholder")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Campo Mensaje */}
            <div>
              <label
                className="text-white50 font-bold text-base"
                htmlFor="message"
              >
                {t("examples.contact.message")}
              </label>
              <div className="bg-white/10 rounded-xl px-3 py-2 mt-1">
                <textarea
                  id="message"
                  className="w-full h-24 outline-none bg-transparent resize-none scrollbar-hide text-sm text-white70 placeholder-white50"
                  placeholder={t("examples.contact.message.placeholder")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Botón de envío */}
            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-xl text-base font-medium text-white70 h-12 px-6 cursor-pointer w-fit bg-customGray transition-transform duration-100 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-customGray/80 hover:scale-105"
                }`}
              >
                {isSubmitting
                  ? t("examples.contact.sending")
                  : t("examples.contact.submit")}
              </button>
            </div>

            {/* reCAPTCHA */}
            <ReCaptchaV3
              ref={recaptchaRef}
              siteKey="YOUR_SITE_KEY"
              action="contact_form"
              onError={(error) => console.error("reCAPTCHA error:", error)}
            />
          </form>

          {/* Footer */}
          <p className="text-base text-white50 font-bold text-center pt-4">
            {t("examples.contact.protected")}{" "}
            <span className="text-white70">reCAPTCHA v3</span>
          </p>
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
        </div>
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
          {t("examples.contact.console")}
        </h3>
        <div className="bg-white/10 w-full h-full rounded-xl px-2 text-white50">
          <textarea
            placeholder={t("examples.contact.console.placeholder")}
            readOnly
            rows={10}
            className="w-full h-full outline-none bg-transparent resize-none scrollbar-hide"
            value={console1}
          />
        </div>
      </CustomContainer>
    </section>
  );
};
