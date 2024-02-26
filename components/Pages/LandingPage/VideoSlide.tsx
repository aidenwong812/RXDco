import { useEffect, useRef, useState } from "react"
import Media from "../../../shared/Media"

const VideoSlide = ({ videoUrl, imageUrl }) => {
  const videoRef = useRef() as any
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (videoRef.current && isHovered) {
      videoRef.current.play()
    }
  }, [videoRef, isHovered])

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      className="bg-white rounded-[1rem] hover:scale-[1.05] shadow-[0_0_1rem_rgba(0,0,0,.03)]
      transition duration-[300ms] cursor-[url('/images/crosshair.svg'),_POINTER] py-[20px]"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video src={videoUrl} muted ref={videoRef} className="w-full aspect-[1/1]" />
      ) : (
        <Media
          type="image"
          link={imageUrl}
          blurLink={imageUrl}
          containerClasses="w-full aspect-[1/1]"
        />
      )}
    </div>
  )
}

export default VideoSlide
