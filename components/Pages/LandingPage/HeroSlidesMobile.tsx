import { Autoplay, EffectCreative } from "swiper"
import Link from "next/link"
import Slider from "../../../shared/Slider"
import Media from "../../../shared/Media"
import data from "../../../utils/landing-hero.json"

const HeroSlidesMobile = () => (
  <Slider
    className="!overflow-visible w-[290px]"
    sliderProps={{
      loop: true,
      centeredSlides: true,
      effect: "creative",
      grabCursor: true,
      autoplay: {
        delay: 5000,
      },
      modules: [EffectCreative, Autoplay],
      creativeEffect: {
        next: {
          translate: ["45%", 0, 0],
          scale: 0.7,
          opacity: 0.6,
        },
        prev: {
          translate: ["-45%", 0, 0],
          opacity: 0.7,
          scale: 0.6,
        },
        limitProgress: 3,
      },
    }}
  >
    {data.map((product) => (
      <Link href={`/product/${product.id}`} key={product.id}>
        <div className="relative cursor-pointer">
          <Media
            type="image"
            link={product.image}
            blurLink={product.image}
            containerClasses="w-[290px] aspect-[1/1] z-[2]"
          />
          <div className="absolute w-full h-full left-0 top-0 bg-lightwhite shadow-[0_0_46px_0_#0000000f] rounded-[0.8rem]" />
        </div>
      </Link>
    ))}
  </Slider>
)

export default HeroSlidesMobile
