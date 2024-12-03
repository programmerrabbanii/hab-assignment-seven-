import { MdArrowOutward } from "react-icons/md";

const OutFound = () => {
    return (
        <div className="text-center py-12">
            <h2 className="text-[#0FF1F6]">GET STARTED</h2>
            <p className="text-white">Embrace <span className="font-bold">the new era of</span> outbound.</p>
            <p className="text-gray-50">Wizia lets you train, activate, and optimize aiDRs. <br /> 
            Take your outbound to new levels of performance and efficiency.</p>
            <button ><button className="btn btn-primary mt-10 ">Sign Up for the Beta  <MdArrowOutward></MdArrowOutward></button>
            </button>
        </div> 
    );
};

export default OutFound;