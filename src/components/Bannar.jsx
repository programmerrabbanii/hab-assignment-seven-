import bannar from '../assets/bannar.jsx.jpeg';
import { MdArrowOutward } from "react-icons/md";






const Bannar = () => {
  return (
   
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
            <h3 className="mb-5 text-3xl">
            <span className='font-semibold'>More </span>, leads 
            <h3> <span className='font-semibold '>less</span> people.</h3>

            </h3> 
            <p>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <button ><button className="btn btn-primary mt-10 ">Sign Up for the Beta  <MdArrowOutward></MdArrowOutward></button>
            </button>
          </div>
        </div> 
      </div>
       <section>
        <div className='text-center  '>
            <h3 className='uppercase text-[#0FF1F6]'>our trusted partners</h3>
           
                <div className=' grid items-center grid-cols-2 md:grid-cols-5 gap-4 w-11/12  mx-auto'>
                    <img src={"https://i.ibb.co.com/NCgkXJm/Group.png"} alt="" />
                    <img src={"https://i.ibb.co.com/gPK3S9n/1.png"} alt="" />
                    <img src={"https://i.ibb.co.com/VDVZ5p2/AMD-logo.png"} alt="" />
                    <img src={"https://i.ibb.co.com/k5sGpHF/Group.png"} alt="" /> 
                    <img src={"https://i.ibb.co.com/gPK3S9n/1.png"} alt="" />

                </div>
            
        </div>
       </section>

    </div>
    
  );
};

export default Bannar;
