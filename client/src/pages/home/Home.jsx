import Banner from "./sections/Banner";
import OurService from "./sections/OurService";
import RegisterForDoctor from "./sections/RegisterForDoctor";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <section>
        <Banner />
      </section>

      {/* Banner Section */}
      <section className="container mx-auto py-24">
        <OurService />
      </section>

      {/* Banner Section */}
      <section className="container mx-auto">
        <RegisterForDoctor />
      </section>
    </>
  );
};

export default Home;
