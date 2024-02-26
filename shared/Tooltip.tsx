import React, { PropsWithChildren } from "react"
import { Tooltip as ReactTooltip } from "react-tooltip"

interface Props {
  id: string
  message: string
  link?: string
  className?: string
  tipClasses?: string
}

const Tooltip = ({
  children,
  message,
  id,
  className,
  tipClasses = "",
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={className}
      data-tooltip-id={id}
      data-tooltip-content={message}
      data-tooltip-delay-hide={2000}
    >
      {children}
      <ReactTooltip
        id={id}
        events={["click"]}
        className={`!bg-white !text-darkgray font-radikal_light
            !text-[16px] !shadow-tip_shadow !w-[200px] !text-center !opacity-1
            ${tipClasses}`}
        place="left"
      />
    </div>
  )
}

export default Tooltip
