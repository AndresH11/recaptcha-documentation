import CustomContainer from "@/components/common/CustomContainer";
import { useTranslations } from "@/i18n/utils";
import { type RecaptchaV3Ref, ReCaptchaV3 } from "google-react-recaptcha-v3";
import { useRef, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface Props {
  lang?: "es" | "en" | "fr" | "it" | "pt" | "pt-BR" | "ja" | "ko";
}

export function CheckoutForm({ lang = "es" }: Props) {
  const [console1, setConsole1] = useState("");
  const t = useTranslations(lang);

  const [cart] = useState<CartItem[]>([
    { id: "1", name: t("examples.products.premium"), price: 29.99 },
    { id: "2", name: t("examples.products.basic"), price: 19.99 },
    { id: "3", name: t("examples.products.deluxe"), price: 49.99 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const recaptchaRef = useRef<RecaptchaV3Ref>(null);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Obtener token justo antes del pago
      const token = await recaptchaRef.current?.execute();

      if (!token) {
        throw new Error("Verificación de seguridad falló");
      }

      setConsole1(token);

      // Procesar pago
      const response = await fetch("/api/payments/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart,
          paymentMethod,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(t("examples.checkout.success"));
        // window.location.href = "/checkout/success";
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error en pago:", error);
      alert(t("examples.checkout.error"));
    } finally {
      setIsProcessing(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-5xl text-white50 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
      <CustomContainer className="px-6 py-3 max-w-[500px] lg:w-[450px] xl:w-[500px] space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FF4444]"></div>
              <div className="h-5 w-5 rounded-full bg-[#F4FF5C]"></div>
              <div className="h-5 w-5 rounded-full bg-[#45FF42]"></div>
            </div>
          </div>

          <h3 className="text-2xl text-white70 font-bold">
            {t("examples.checkout.title")}
          </h3>

          <div className="space-y-3">
            <h4 className="text-lg text-white70 font-semibold">
              {t("examples.checkout.summary")}
            </h4>
            <div className="space-y-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white/10 rounded-lg px-3 py-2"
                >
                  <span className="text-white70 text-sm">{item.name}</span>
                  <span className="text-white70 font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center bg-customGray rounded-lg px-3 py-2 border-t border-white/20">
                <span className="text-white70 font-bold">
                  {t("examples.checkout.total")}
                </span>
                <span className="text-white70 font-bold text-lg">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg text-white70 font-semibold">
              {t("examples.checkout.payment.method")}
            </h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-customGray"
                />
                <span className="text-white70">
                  {t("examples.checkout.payment.credit")}
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debit"
                  checked={paymentMethod === "debit"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-customGray"
                />
                <span className="text-white70">
                  {t("examples.checkout.payment.debit")}
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-customGray"
                />
                <span className="text-white70">
                  {t("examples.checkout.payment.paypal")}
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center pt-2">
            <button
              onClick={handlePayment}
              disabled={!paymentMethod || isProcessing}
              className={`rounded-xl text-base font-medium text-white70 h-12 px-6 cursor-pointer w-full bg-customGray hover:scale-105 transition-transform duration-100 ${
                !paymentMethod || isProcessing
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-customGray/80 hover:scale-105"
              }`}
            >
              {isProcessing
                ? t("examples.checkout.processing")
                : `${t("examples.checkout.pay")} $${total.toFixed(2)}`}
            </button>
          </div>

          <ReCaptchaV3
            ref={recaptchaRef}
            siteKey="YOUR_SITE_KEY"
            action="checkout_payment"
            onError={(error) => {
              console.error("reCAPTCHA error:", error);
              alert(t("examples.checkout.security.error"));
            }}
          />

          <p className="text-base text-white50 font-bold text-center pt-4">
            {t("examples.checkout.secure.payment")}{" "}
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

      <CustomContainer className="px-6 py-3 max-w-[400px] lg:w-[350px] xl:w-[400px] space-y-4">
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
            placeholder={t("examples.console.placeholder")}
            readOnly
            rows={12}
            className="w-full h-full outline-none bg-transparent resize-none scrollbar-hide"
            value={console1}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
