import { createContext, useContext, useMemo, useState } from "react"
import { CATEGORIES } from "../utils/customPackages"
import concentratesData from "../utils/concentrates.json"
import flowandediblesData from "../utils/flowandedibles.json"
import prerollData from "../utils/preroll.json"
import servicesData from "../utils/services.json"
import vapeproductsData from "../utils/vapeproducts.json"
import _ from "loadsh"

const CustomPackagesContext = createContext(undefined)

export const CustomPackagesProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.NOT_SELECTED)
  const [isVisiblePackages, setIsVisiblePackages] = useState(false)
  const [selectedProductID, setSelectedProductID] = useState(null)

  const selectedProduct = useMemo(() => {
    const products = [
      ...concentratesData,
      ...flowandediblesData,
      ...prerollData,
      ...servicesData,
      ...vapeproductsData,
    ].filter((product) => product.id === selectedProductID)
    if (products.length) return products[0]
    return null
  }, [selectedProductID])

  const favoriteProducts = useMemo(() => {
    const temp = [
      ...concentratesData,
      ...flowandediblesData,
      ...prerollData,
      ...servicesData,
      ...vapeproductsData,
    ]
      .map((product: any) => product?.favorite && product)
      .filter((product) => product)
      .sort((a, b) => b.purchased_count - a.purchased_count)

    return _.uniqBy(temp, "id")
  }, [])

  const value = useMemo(
    () => ({
      setSelectedCategory,
      selectedCategory,
      isVisiblePackages,
      setIsVisiblePackages,
      favoriteProducts,
      selectedProductID,
      setSelectedProductID,
      selectedProduct,
    }),
    [
      isVisiblePackages,
      setIsVisiblePackages,
      setSelectedCategory,
      selectedCategory,
      favoriteProducts,
      selectedProductID,
      setSelectedProductID,
      selectedProduct,
    ],
  )

  return <CustomPackagesContext.Provider value={value}>{children}</CustomPackagesContext.Provider>
}

export const useCustomPackages = () => {
  const context = useContext(CustomPackagesContext)
  if (context === undefined) {
    throw new Error("useCustomPackages must be used within an CustomPackagesProvider")
  }
  return context
}
