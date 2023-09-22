type Props = {
  title: string
  slug: string
  author: string
  content: unknown
  image: {
    url: string
    alt: string
  }
  createdAt: string
}

const Card = (props: Props) => {
  const href = `/blog/${props.slug}`

  return (
    <a href={href}>
      <div className='flex flex-col p-2 rounded-md border-l border-b border-slate-700 shadow-md shadow-slate-900 hover:shadow-slate-800 hover:shadow-lg group hover:scale-105 transition-all ease-out duration-300'>
        <div className='h-28'>
          <img
            src={props.image.url}
            alt={props.image.alt}
            className='h-full w-full object-cover group-hover:opacity-60 transition-opacity duration-500'
          />
        </div>
        <div className='p-3'>
          <div className='py-2'>
            <h1 className='text-xl md:text-2xl'>{props.title}</h1>
          </div>
          <div>
            <p className='text-neutral-300 text-right'>{props.author}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
