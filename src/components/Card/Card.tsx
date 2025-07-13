import {
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadcnCard
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import "swiper/css/bundle"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Badge } from "../ui/badge"

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
    <a
      href={props?.href}
      id='blog-card'
      className='block group transition-transform duration-300 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
    >
      <ShadcnCard
        className={cn(
          "overflow-hidden h-full transition-all duration-300",
          "border-0 rounded-none",
          "hover:shadow-lg hover:shadow-black/10",
          "bg-card/50 hover:bg-card"
        )}
      >
        {/* Image Section */}
        <div className='relative overflow-hidden'>
          <div className='aspect-[16/9] w-full'>
            <img
              src={props?.image?.url}
              alt={props?.image?.alt}
              className={cn(
                "h-full w-full object-cover transition-all duration-500",
                "group-hover:scale-105 group-hover:brightness-90"
              )}
            />
          </div>
          {/* Optional overlay gradient for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>

        {/* Title Section */}
        <CardHeader className='pb-3'>
          <CardTitle
            className={cn(
              "h4 !mb-0",
              "text-card-foreground group-hover:text-primary transition-colors duration-300",
              "line-clamp-2"
            )}
          >
            {props?.title}
          </CardTitle>
        </CardHeader>

        {/* Tags Section - Only for projects */}
        {props?.type === "project" && props?.tags && props?.tags.length > 0 && (
          <CardFooter className='pt-0 pb-4'>
            <div className='w-full'>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={8}
                slidesPerView='auto'
                autoplay={{
                  delay: 3000,
                  waitForTransition: false,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                enabled
                className='!overflow-visible'
              >
                {props.tags.map((tag, index) => (
                  <SwiperSlide key={`${tag}-${index}`} className='!w-auto'>
                    <Badge
                      variant='secondary'
                      className={cn(
                        "transition-all duration-300",
                        "group-hover:bg-secondary",
                        "whitespace-nowrap capitalize"
                      )}
                    >
                      {tag}
                    </Badge>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </CardFooter>
        )}
      </ShadcnCard>
    </a>
  )
}

export default Card
