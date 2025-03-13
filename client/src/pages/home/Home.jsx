import Banner from "./sections/Banner";
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
        <RegisterForDoctor />
      </section>
    </>
  );
};

export default Home;
