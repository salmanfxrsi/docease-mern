import Banner from "./sections/Banner";
import FAQ from "./sections/FAQ";
import OurService from "./sections/OurService";
import RegisterForDoctor from "./sections/RegisterForDoctor";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <section>
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
    </>
  );
};

export default Home;
