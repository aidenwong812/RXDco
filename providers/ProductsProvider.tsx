import { createContext, useContext, useEffect, useMemo, useState } from "react"
import _ from "loadsh"
import productsTrendingData from "../utils/products-trending.json"
import { CATEGORIES } from "../utils/customPackages"
import concentratesData from "../utils/concentrates.json"
import flowandediblesData from "../utils/flowandedibles.json"
import prerollData from "../utils/preroll.json"
import servicesData from "../utils/services.json"
import vapeproductsData from "../utils/vapeproducts.json"
import allproducts from "../utils/allproducts.json"

const ProductsContext = createContext(undefined)

export const ProductsProvider = ({ children }) => {
  const [isVisibleProductsTrending, setIsVisibleProductsTrending] = useState(false)
  const [productsList, setProductsList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL)

  useEffect(() => {
    switch (selectedCategory) {
      case CATEGORIES.ALL:
        setProductsList(allproducts)
        return
      case CATEGORIES.CONCENTRATES:
        setProductsList(concentratesData)
        return
      case CATEGORIES.FLOWERANDEDIBLES:
        setProductsList(flowandediblesData)
        return
      case CATEGORIES.PREROLL:
        setProductsList(prerollData)
        return
      case CATEGORIES.SERVICES:
        setProductsList(servicesData)
        return
      case CATEGORIES.VAPEPRODUCTS:
        setProductsList(vapeproductsData)
        return
      default:
        return
    }
  }, [selectedCategory])

  const products = useMemo(() => {
    return productsTrendingData
  }, [])

  const value = useMemo(
    () => ({
      products,
      isVisibleProductsTrending,
      setIsVisibleProductsTrending,
      productsList: _.uniqBy(productsList, "id"),
      selectedCategory,
      setSelectedCategory,
    }),
    [
      products,
      isVisibleProductsTrending,
      setIsVisibleProductsTrending,
      productsList,
      selectedCategory,
      setSelectedCategory,
    ],
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error("useProducts must be used within an ProductsProvider")
  }
  return context
}
