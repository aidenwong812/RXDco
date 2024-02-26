import { useWhyUsPage } from "../../../providers/WhyUsPageProvider"

const DesktopDecoration = () => {
  const { selectedColor } = useWhyUsPage()

  return (
    <svg
      className="absolute z-[1] left-0 w-screen h-full
        pointer-events-none top-[-23px] transition duration-[0.3s]"
      width="1440"
      height="646"
      viewBox="0 0 1440 646"
      style={{
        color: selectedColor,
      }}
    >
      <defs>
        <path id="whysvg-a" d="M0 0h1440v646H0z" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <mask id="whysvg-b" fill="currentColor">
          <use xlinkHref="#whysvg-a" />
        </mask>
        <g mask="url(#whysvg-b)" stroke="currentColor">
          <g transform="translate(-577 -47)">
            <path
              d="M2290 575l-57 35a427 427 0 01-479-20l-1-1a693 693 0 00-515-128l-148 22c-89 14-181 4-265-27-86-32-176-52-267-58L0 359h0"
              stroke-linecap="square"
            />
            <circle cx="1128" cy="153" r="76.5" />
            <path d="M1823 64c93 6 156 33 191 81s41 116 19 205h0v2c-93-6-156-33-191-81s-41-117-19-207z" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default DesktopDecoration
