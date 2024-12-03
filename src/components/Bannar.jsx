import bannar from '../assets/bannar.jsx.jpeg';
import { MdArrowOutward } from "react-icons/md";


const Bannar = () => {
  return (
    <div>
     <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-neutral-content flex items-center justify-start w-full h-full"> 
          <div className=" w-8/12 text-start mr-0 px-32"> 
            <h1 className="mb-5  text-[#0FF1F6]">
            AI SDRs (aiDRs)
            </h1> 
            <h3 className="mb-5">
            <span className='font-semibold'>More </span>, leads 
            <h3> <span className='font-semibold '>less</span> people.</h3>

            </h3> 
            <p>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <button ><button className="btn btn-primary mt-10 ">Sign Up for the Beta  <MdArrowOutward></MdArrowOutward></button>
            </button>
          </div>
        </div> 
      </div>
    </div>
    </div>
  );
};

export default Bannar;
