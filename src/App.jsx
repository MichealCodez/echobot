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
    <main className="max-container font-grotesk">
      <section className="padding-x">
        <Hero />
      </section>
      <section className="padding">
        <StayConnected />
      </section>
      <section className="padding">
        <PowerOfEchobot />
      </section>
      <section className="padding">
        <TryIt />
      </section>
      <section className="padding">
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
