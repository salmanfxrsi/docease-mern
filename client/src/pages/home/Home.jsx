import Banner from "./sections/Banner";
import ContactForm from "./sections/ContactForm";
import FAQ from "./sections/FAQ";
import OurService from "./sections/OurService";
import RegisterForDoctor from "./sections/RegisterForDoctor";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="container mx-auto pt-12">
        <Banner />
      </section>

      {/* Our Service Section */}
      <section className="container mx-auto py-24">
        <OurService />
      </section>

      {/* Register For Doctor Section */}
      <section className="container mx-auto">
        <RegisterForDoctor />
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-24">
        <FAQ />
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto">
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
