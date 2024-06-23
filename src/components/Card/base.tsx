import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"

type Props = {
  type: "blog" | "project"
  title?: string
  slug?: string
  author?: string
  content?: unknown
  image?: {
    url: string
    alt: string
  }
  createdAt?: string
  href?: string
  tags?: string[]
}

const Card = (props: Props) => {
  return (
    <a href={props?.href} id='blog-card'>
      <div
        className='
        flex flex-col rounded-md lg:rounded-lg
      group lg:hover:scale-105 
      transition-all ease-out duration-300 
       border-[1px] border-stone-700 border-collapse lg:border-opacity-10 lg:hover:border-opacity-100'
      >
        <div className='h-[7rem]'>
          <img
            src={props?.image?.url}
            alt={props?.image?.alt}
            className='h-full w-full object-cover lg:group-hover:opacity-60 transition-opacity duration-500'
          />
        </div>
        <div className='p-3'>
          <div className='py-2'>
            <h1 className='text-xl md:text-2xl'>{props?.title}</h1>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            waitForTransition: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          enabled
        >
          {props?.type === "project" &&
            props?.tags?.map((tag) => (
              <SwiperSlide
                className='text-neutral-300 text-sm py-1 text-center rounded-xl'
                key={tag}
              >
                {tag}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </a>
  )
}

export default Card
