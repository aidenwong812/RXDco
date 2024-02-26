import Link from "next/link"
import Media from "../../../shared/Media"
import blogs from "../../../utils/blog-list.json"

const BlogList = () => (
  <>
    {blogs.map((blog, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="w-full md:w-[33.3%] md:px-[18px] mb-[48px] flex flex-col" key={i}>
        <Link href={blog.link}>
          <div className="cursor-pointer">
            <Media
              type="image"
              link={blog.image}
              blurLink={blog.image}
              containerClasses="aspect-[282/256] w-full rounded-[0.5rem] overflow-hidden
                            mb-[30px]"
            />
          </div>
        </Link>
        <p
          className="text-[20px] pb-[16px]
                    font-radikal_light leading-[1.5] tracking-[-0.8px]"
        >
          {blog.title}
        </p>
        <p
          className="pb-[16px] text-darkgray leading-[1.4]
                    font-[300] font-radikal_light flex-grow"
        >
          {blog.description}
        </p>
        <div
          className="text-[0.75rem] text-black uppercase leading-[1.5] tracking-[0.1px]
                    font-radikal_medium"
        >
          {blog.createdAt}
        </div>
      </div>
    ))}
  </>
)

export default BlogList
