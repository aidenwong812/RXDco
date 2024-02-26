import { useTestLabel } from "../../../providers/TestLabelProvider"
import Icon from "../../../shared/Icon"

const DownloadButton = () => {
  const { canvasRef } = useTestLabel()

  const buttonClasses = `border border-blue bg-blue text-white hover:text-blue hover:bg-white
    font-radikal_medium text-[14px] flex gap-x-[10px] items-center px-[30px] py-[9.6px]
    rounded-[0.5rem] leading-[100%]`

  const handleDownloadClick = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const downloadLink = document.createElement("a")
      const dataURL = canvas.toDataURL("image/png")
      downloadLink.href = dataURL
      downloadLink.download = "3d_model.png"
      downloadLink.click()
    }
  }

  return (
    <button className={buttonClasses} type="button" onClick={handleDownloadClick}>
      Download Sample <Icon name="download" raw size={16} />
    </button>
  )
}

export default DownloadButton
