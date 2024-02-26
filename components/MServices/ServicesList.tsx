import Link from "next/link"

const ServicesList = () => (
  <div className="bg-gray pl-[20px] flex flex-col gap-y-[24px] font-radikal_light text-[16px]">
    <Link href="/services/branding">
      <p>Branding</p>
    </Link>
    <Link href="/services/development">
      <p>Development</p>
    </Link>
    <Link href="/services/sourcing">
      <p>Sourcing</p>
    </Link>
  </div>
)

export default ServicesList
