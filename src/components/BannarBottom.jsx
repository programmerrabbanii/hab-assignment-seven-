import banarIn2 from '../assets/ph_magic-wand-duotone.png'
import banarIn3 from '../assets/Vector.png'

const BannarBottom = () => {
  return (
   <div className='bg-[#002228]'>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-5  w-11/12 mx-auto text-white '>
      <div className="p-5 card-compact mt-6">
        <figure>
          <img
            src={banarIn2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">You’re in Control!</h2>
          <p>aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.</p>
          
        </div>
      </div>

      <div className=" p-5 card-compact mt-6 ">
        <figure>
          <img
            src={banarIn2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Infinitely Scalable</h2>
          <p>Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.</p>
          
        </div>
      </div>

      <div className=" p-5 card-compact mt-6 ">
        <figure>
          <img
            src={banarIn3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Incredibly Flexible</h2>
          <p>Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.</p>
          
        </div>
      </div>
    </div> 
   </div>
  );
};

export default BannarBottom;
