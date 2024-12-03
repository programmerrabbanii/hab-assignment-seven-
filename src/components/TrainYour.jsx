import bannar from '../assets/bannar.jsx.jpeg';
import { FaRegCheckCircle } from "react-icons/fa";


const TrainYour = () => {
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
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-semibold">Train your aiDR on your...</h1>
            <p className="mb-5 text-[#0FF1F6]">
            prefered email st|
            </p>
            <p>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
            <div className='text-center w-8/12 mx-auto mt-5'>
            <div className='flex gap-4'>
                <p className='flex items-center gap-2 text-[#0FF1F6] mb-4'>  <FaRegCheckCircle></FaRegCheckCircle> Quick to ramp</p>
                <p className=' mb-4 flex gap-2 items-center text-[#0FF1F6]'>  <FaRegCheckCircle></FaRegCheckCircle> Easy to optimize</p>
            </div>

            <div className='flex gap-4'>
                <p className=' mb-4 flex items-center gap-2 text-[#0FF1F6]'>  <FaRegCheckCircle></FaRegCheckCircle> Quick to scale up</p>
                <p className=' mb-4 flex gap-2 items-center text-[#0FF1F6]'>  <FaRegCheckCircle></FaRegCheckCircle> Quick to ramp</p>
            </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default TrainYour;
