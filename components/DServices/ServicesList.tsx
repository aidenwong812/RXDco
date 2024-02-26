import Link from "next/link"

const ServicesList = () => (
  <div className="absolute left-0 pt-[50px]">
    <div className="bg-white w-[160px] text-black font-radikal_light rounded-[0.5rem] overflow-hidden">
      <Link href="/services/branding">
        <p className="px-[32px] py-[15px] text-left hover:bg-brown hover:text-white transition duration-[0.2s]">
          Branding
        </p>
      </Link>
      <Link href="/services/development">
        <p className="px-[32px] py-[15px] text-left hover:bg-brown hover:text-white transition duration-[0.2s]">
          Development
        </p>
      </Link>
      <Link href="/services/sourcing">
        <p className="px-[32px] py-[15px] text-left hover:bg-brown hover:text-white transition duration-[0.2s]">
          Sourcing
        </p>
      </Link>
    </div>
  </div>
)

export default ServicesList
