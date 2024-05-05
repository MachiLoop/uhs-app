import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Hero = () => {
  return (
    <div className="hero-big-wrapper relative mb-4">
      {/* HERO VIDEO */}
      <video muted loop className="hero-video ">
        <source
          src="/video/production_ID_3769033.mp4"
          type="video/mp4"
          className="w-full"
        />
      </video>

      {/* HERO SPLIDE */}
      <div className="absolute w-full h-full top-0 left-0 ">
        <div className="splide-container-wrapper grid w-11/12 h-full mx-auto justify-between items-center  pt-6">
          <div>
            <h1>Delicious Steaks</h1>
            <p>
              From <span>1206+</span> Customer Reviews
            </p>
          </div>
          <div className=" img-container">
            <Splide hasTrack={false} aria-label="Hero Images">
              <SplideTrack>
                <SplideSlide>
                  <img
                    src="/images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                    // className="scale-95"
                    alt="Hero Image"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="/images/slide/jason-leung-O67LZfeyYBk-unsplash.jpg"
                    // className="scale-95"
                    alt="Hero Image"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="/images/slide/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
                    // className="scale-95"
                    alt="Hero Image"
                  />
                </SplideSlide>
              </SplideTrack>

              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <img src="/images/arrow/prev-arrow.jpg" alt="" />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <img src="/images/arrow/next-arrow.jpg" alt="" />
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
