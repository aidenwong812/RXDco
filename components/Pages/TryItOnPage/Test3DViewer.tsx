import React from "react"
import useMedia from "../../../hooks/useMedia"
import { useTestLabel } from "../../../providers/TestLabelProvider"

const ThreeDModelViewer = () => {
  const isMobile = useMedia()
  const { canvasRef } = useTestLabel()

  return (
    <div>
      <canvas ref={canvasRef} width={isMobile ? 376 : 728} height={isMobile ? 500 : 572} />
    </div>
  )
}

export default ThreeDModelViewer
