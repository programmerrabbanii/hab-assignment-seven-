const Carousel = () => {
    return (
      <div className="carousel w-full bg-[#001F24] text-white">
        <div id="slide1" className="carousel-item relative w-full flex flex-col items-center justify-center">
          <div className="text-center max-w-xl px-4">
            <div className="text-4xl text-[#0FF1F6] mb-4">❝</div>
            <p className="text-lg mb-4">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <h4 className="text-[#0FF1F6] font-semibold">John Doe</h4>
            <p className="text-sm">Chief Strategy Officer @ Company</p>
          </div>
          <div className="absolute left-5 right-5 bottom-5 flex justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        <div id="slide2" className="carousel-item relative w-full flex flex-col items-center justify-center">
          <div className="text-center max-w-xl px-4">
            <div className="text-4xl text-[#0FF1F6] mb-4">❝</div>
            <p className="text-lg mb-4">
              Another testimonial goes here. Replace with any inspiring quote or
              client feedback.
            </p>
            <h4 className="text-[#0FF1F6] font-semibold">Jane Smith</h4>
            <p className="text-sm">Marketing Head @ Company</p>
          </div>
          <div className="absolute left-5 right-5 bottom-5 flex justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        <div id="slide3" className="carousel-item relative w-full flex flex-col items-center justify-center">
          <div className="text-center max-w-xl px-4">
            <div className="text-4xl text-[#0FF1F6] mb-4">❝</div>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <h4 className="text-[#0FF1F6] font-semibold">Michael Lee</h4>
            <p className="text-sm">CTO @ Company</p>
          </div>
          <div className="absolute left-5 right-5 bottom-5 flex justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        <div id="slide4" className="carousel-item relative w-full flex flex-col items-center justify-center">
          <div className="text-center max-w-xl px-4">
            <div className="text-4xl text-[#0FF1F6] mb-4">❝</div>
            <p className="text-lg mb-4">
              Replace this text with feedback or quote from your trusted clients.
            </p>
            <h4 className="text-[#0FF1F6] font-semibold">Emily Johnson</h4>
            <p className="text-sm">Founder @ Company</p>
          </div>
          <div className="absolute left-5 right-5 bottom-5 flex justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;
  