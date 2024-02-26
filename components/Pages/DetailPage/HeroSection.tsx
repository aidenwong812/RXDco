import { useDetail } from "../../../providers/DetailProvider"
import HeroNoAdvantages from "./HeroNoAdvantages"
import HeroWithAdvantages from "./HeroWithAdvantages"

const HeroSection = () => {
  const { details } = useDetail()

  if (details?.advantages) return <HeroWithAdvantages />

  return <HeroNoAdvantages />
}

export default HeroSection
