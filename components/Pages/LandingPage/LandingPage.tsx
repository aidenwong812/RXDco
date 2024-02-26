import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import BrandSlides from "./BrandSlides"
import BrandingDesign from "./BrandingDesign"
import Development from "./Development"
import LookingSection from "./LookingSection"
import HeroSection from "./HeroSection"
import Sourcing from "./Sourcing"
import UpCannabis from "../../UpCannabis"
import WhyUsSection from "../WhyUsSection"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead
      title="RXDco | Custom Cannabis Packaging Company"
      desription="RXDco is the leading provider of custom cannabis packaging solutions. We offer a wide range of products and services to meet your specific needs."
      image="/images/landing_seo.jpg"
    />
    <div className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] overflow-hidden">
      <HeroSection />
      <UpCannabis />
      <BrandingDesign />
      <Development />
      <Sourcing />
      <BrandSlides />
      <LookingSection />
      <WhyUsSection />
    </div>
  </Layout>
)

export default LandingPage
