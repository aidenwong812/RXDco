import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"
import { containers } from "../utils/testLabel"
import use3DModeling from "../hooks/use3DModeling"

const TestLabelContext = createContext(undefined)

export const TestLabelProvider = ({ children }) => {
  const [selected3DObject, setSelected3DObject] = useState(containers[0])
  const { canvasRef, loadTexture } = use3DModeling(selected3DObject)
  const filePickerRef = useRef<HTMLInputElement | undefined>()

  const openPicker = () => {
    filePickerRef.current && filePickerRef.current.click()
  }

  const rotateImage = useCallback((image, degrees) => {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    canvas.width = image.width
    canvas.height = image.height

    context.translate(canvas.width / 2, canvas.height / 2)
    context.rotate((degrees * Math.PI) / 180)
    context.drawImage(image, -canvas.width / 2, -canvas.height / 2)

    return canvas.toDataURL("image/png")
  }, [])

  function rotateBase64Image(base64String, degrees) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
        const rotatedBase64 = rotateImage(image, degrees)
        resolve(rotatedBase64)
      }
      image.onerror = (error) => {
        reject(error)
      }
      image.src = `${base64String}`
    })
  }

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = e.target.files[0]
      if (!file || !file.type.match("image.*")) return

      const img: any = new Image()
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = (evt) => {
        if (evt.target.readyState == FileReader.DONE) {
          // Rotate the image
          rotateBase64Image(evt.target.result, selected3DObject.rotateValue || 0)
            .then((rotatedBase64) => {
              img.src = rotatedBase64
            })
            .catch((error) => {
              console.error("Error rotating image:", error)
            })
        }
      }

      img.onload = () => {
        // Load the texture after rotation
        loadTexture(img)
      }
    },
    [loadTexture, rotateBase64Image, selected3DObject.rotateValue],
  )

  const value = useMemo(
    () => ({
      handleFileChange,
      openPicker,
      selected3DObject,
      setSelected3DObject,
      filePickerRef,
      canvasRef,
    }),
    [handleFileChange, openPicker, selected3DObject, setSelected3DObject, filePickerRef, canvasRef],
  )

  return <TestLabelContext.Provider value={value}>{children}</TestLabelContext.Provider>
}

export const useTestLabel = () => {
  const context = useContext(TestLabelContext)
  if (context === undefined) {
    throw new Error("useTestLabel must be used within an TestLabelProvider")
  }
  return context
}
