import ProductsPage from "../../components/Pages/ProductsPage"
import { ProductsProvider } from "../../providers/ProductsProvider"

const Products = () => (
  <ProductsProvider>
    <ProductsPage />
  </ProductsProvider>
)

export default Products
