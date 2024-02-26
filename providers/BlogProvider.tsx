import { createContext, useContext, useMemo } from "react"
import { useRouter } from "next/router"

const BlogContext = createContext(undefined)

export const BlogProvider = ({ children }) => {
  const id = useRouter().query.id as any

  const detailPath = require.context("../utils/blog-detail", true)

  const details = useMemo(() => {
    return id ? detailPath(`./${id}.tsx`)?.default : null
  }, [id])

  const value = useMemo(
    () => ({
      details,
    }),
    [details],
  )

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}

export const useBlog = () => {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error("useBlog must be used within an BlogProvider")
  }
  return context
}
