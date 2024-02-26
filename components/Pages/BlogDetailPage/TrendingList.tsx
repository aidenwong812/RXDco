import Link from "next/link"
import { useMemo } from "react"
import Media from "../../../shared/Media"
import { useBlog } from "../../../providers/BlogProvider"
import blogs from "../../../utils/blog-list.json"

const TrendingList = () => {
  const { details } = useBlog()

  const trending = useMemo(() => {
    if (!details?.trending) return []

    return details.trending.map((blogId) => blogs.filter((blog) => blog.id === blogId)[0])
  }, [details])

  return (
    <>
      {trending.map((blog, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="w-full md:w-[25%] px-[16px] mb-[48px] flex flex-col" key={i}>
          <Link href={blog.link}>
            <div className="cursor-pointer">
              <Media
                type="image"
                link={blog.image}
                blurLink={blog.image}
                containerClasses="aspect-[282/256] w-full md:w-[282px] rounded-[0.5rem] overflow-hidden
                              mb-[30px]"
              />
            </div>
          </Link>
          <p
            className="md:max-w-[285px] text-[20px] mb-[16px]
                      font-radikal_light leading-[1.5] tracking-[-0.8px]"
          >
            {blog.title}
          </p>
          <div
            className="md:max-w-[285px] pb-[16px] text-darkgray leading-[1.4]
                      font-[300] font-radikal_light flex-grow"
          >
            {blog.description}
          </div>
          <p
            className="text-[.75rem] text-black uppercase
                      font-radikal_medium leading-[1.5]"
          >
            {blog.createdAt}
          </p>
        </div>
      ))}
    </>
  )
}

export default TrendingList
