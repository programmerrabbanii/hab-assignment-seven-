import alloc from '../assets/bannar.jsx.jpeg';

const Allocate = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${alloc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
      }}
      className="text-white flex items-start justify-start min-h-screen"
    >
      {/* Content Section */}
      <div className="max-w-3xl">
        {/* Title Section */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Allocate effort where your reps <br /> make an impact.
        </h1>
        <h3 className="text-lg md:text-2xl text-[#0FF1F6] mb-4">Let us handle the rest.</h3>
        <p className="text-sm md:text-base mb-8">
          Keep your reps "in the air" — out in the field and on the phone <br /> where they can build
          relationships.
        </p>

        {/* Stats Section */}
        <div className="flex gap-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#0FF1F6]">32%</h2>
            <p>Improvement in <br /> Open Rates</p>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#0FF1F6]">75%</h2>
            <p>Improvement in <br /> Ramp Time</p>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#0FF1F6]">35%</h2>
            <p>Improvement in <br /> Meetings Booked</p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Allocate;
