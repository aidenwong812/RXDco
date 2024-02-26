import { createContext, useContext, useMemo } from "react"
import { useRouter } from "next/router"

const DetailContext = createContext(undefined)

export const DetailProvider = ({ children }) => {
  const id = useRouter().query.id as any

  const detailPath = require.context("../utils/details", true)

  const details = useMemo(() => {
    return id ? detailPath(`./${id}.json`) : null
  }, [id])

  const value = useMemo(
    () => ({
      details,
    }),
    [details],
  )

  return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
}

export const useDetail = () => {
  const context = useContext(DetailContext)
  if (context === undefined) {
    throw new Error("useDetail must be used within an DetailProvider")
  }
  return context
}
