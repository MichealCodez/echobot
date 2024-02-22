import {
  Hero,
  StayConnected,
  PowerOfEchobot,
  TryIt,
  CustomerRevier,
  GetMobile,
  FAQ,
  Footer,
} from "./sections";

export default function App() {
  return (
    <main className="relative font-grotesk w-full max-container">
      <section className="padding-x bg-hero max-container">
        <Hero />
      </section>
      <section className="padding">
        <StayConnected />
      </section>
      <section className="padding">
        <PowerOfEchobot />
      </section>
      <section id="try-it" className="padding bg-[#001022]">
        <TryIt />
      </section>
      <section className="padding bg-minGrad flex justify-center">
        <CustomerRevier />
      </section>
      <section className="padding">
        <GetMobile />
      </section>
      <section className="padding">
        <FAQ />
      </section>
      <section className="padding-x">
        <Footer />
      </section>
    </main>
  );
}
