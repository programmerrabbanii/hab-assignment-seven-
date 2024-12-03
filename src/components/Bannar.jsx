import bannar from "../assets/bannar.jsx.jpeg";
import { MdArrowOutward } from "react-icons/md";

const Bannar = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-neutral-content flex items-center justify-start w-full h-full px-6 md:px-16 lg:px-32">
          <div className="w-full md:w-10/12 lg:w-8/12 text-start">
            <h1 className="mb-5 text-[#0FF1F6] text-2xl md:text-3xl lg:text-4xl font-bold">
              AI SDRs (aiDRs)
            </h1>
            <h3 className="mb-5 text-xl md:text-2xl lg:text-3xl">
              <span className="font-semibold">More </span>, leads{" "}
              <h3>
                <span className="font-semibold">less</span> people.
              </h3>
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
            </p>
            <button className="btn btn-primary mt-10 flex items-center gap-2">
              Sign Up for the Beta <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <section>
        <div className="text-center bg-[#07292F] py-10">
          <h3 className="uppercase text-[#0FF1F6] text-lg md:text-xl mb-6">
            our trusted partners
          </h3>
          <div className="grid items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-11/12 mx-auto">
            <img src="https://i.ibb.co/NCgkXJm/Group.png" alt="Partner 1" />
            <img src="https://i.ibb.co/gPK3S9n/1.png" alt="Partner 2" />
            <img src="https://i.ibb.co/VDVZ5p2/AMD-logo.png" alt="Partner 3" />
            <img src="https://i.ibb.co/k5sGpHF/Group.png" alt="Partner 4" />
            <img src="https://i.ibb.co/gPK3S9n/1.png" alt="Partner 5" />
          </div>
        </div>
      </section>
    </div>
  );
};  

export default Bannar;
