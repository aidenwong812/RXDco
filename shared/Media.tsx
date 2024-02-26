import Image from "next/image"
import { CSSProperties, DetailedHTMLProps, VideoHTMLAttributes } from "react"

interface IMedia {
  type: "video" | "image"
  link?: string
  posterLink?: string
  containerStyle?: CSSProperties
  containerClasses?: string
  imageClasses?: string
  className?: string
  videoProps?: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
  blurLink?: string
  alt?: string
}

function Media({
  type,
  link,
  containerClasses,
  containerStyle,
  blurLink,
  alt,
  imageClasses,
}: IMedia) {
  return (
    <div className={`relative ${containerClasses || ""}`} style={containerStyle || {}}>
      {type === "image" && link && (
        <Image
          className={`absolute w-[100%] object-contain ${imageClasses}`}
          src={link}
          layout="fill"
          alt={alt || "not found image"}
          placeholder="blur"
          blurDataURL={
            blurLink ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMXP2OQAGOQKc/DqDigAAAABJRU5ErkJggg=="
          }
          unoptimized
        />
      )}
    </div>
  )
}

export default Media
