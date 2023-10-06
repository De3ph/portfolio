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
      <div className='flex flex-col p-2 rounded-md border-b border-indigo-800 shadow-sm shadow-indigo-800 hover:shadow-indigo-800 hover:shadow-md group hover:scale-105 transition-all ease-out duration-300'>
        <div className='h-28'>
          <img
            src={props?.image?.url}
            alt={props?.image?.alt}
            className='h-full w-full object-cover group-hover:opacity-60 transition-opacity duration-500'
          />
        </div>
        <div className='p-3'>
          <div className='py-2'>
            <h1 className='text-xl md:text-2xl'>{props?.title}</h1>
          </div>
          <div>
            <p className='text-neutral-300 text-right'>{props?.author}</p>
          </div>
        </div>
        {props?.type === "project" && (
          <div className='duration-200 flex justify-center gap-x-4'>
            {props?.tags?.map((tag) => (
              <span className='text-neutral-300 text-sm bg-neutral-900 px-2 py-1 rounded-xl'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}

export default Card
