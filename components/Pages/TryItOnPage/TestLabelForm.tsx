import Icon from "../../../shared/Icon"
import Select from "../../../shared/Select"
import { useTestLabel } from "../../../providers/TestLabelProvider"
import { containers } from "../../../utils/testLabel"
import useMedia from "../../../hooks/useMedia"

const TestLabelForm = () => {
  const { handleFileChange, openPicker, setSelected3DObject, selected3DObject, filePickerRef } =
    useTestLabel()
  const isMobile = useMedia()

  const handleSelect = (e) => {
    const threeObject = containers.filter((item) => item.value === e.target.value)[0]

    setSelected3DObject(threeObject)
  }
  return (
    <div className="col-span-1 pt-[42px] bg-white rounded-[8px]">
      <div className="border-b-[2px] border-b-gray w-full px-[40px]">
        <div className="max-w-[300px] w-full">
          <h2
            className="leading-[1.125] text-[32px] md:text-[40px] pb-[16px] md:pb-[24px] tracking-[-0.8px]
            text-black font-radikal_light font-[400]"
          >
            Test your label
          </h2>
          <p className="text-[16px] text-black font-radikal_light pb-[32px]">
            For a personalised sample of your artwork,{" "}
            <a
              href="https://rxdco.com/contact"
              className="text-brown font-radikal_medium underline"
            >
              contact a sales rep
            </a>
            .
          </p>
        </div>
      </div>
      <div className="border-b-[2px] border-b-gray w-full pl-[55px] md:px-[40px]">
        <div className="max-w-[300px] w-full py-[32px]">
          <h3
            className="leading-[1.125] text-[16px] pb-[8px] tracking-[-0.8px]
            text-black font-radikal_medium font-[400]"
          >
            1. Select container type
          </h3>
          <p className="text-[16px] text-black font-radikal_light pb-[24px] leading-[1.5]">
            Choose one of our featured containers.
          </p>
          <Select
            id="container-type"
            name="container-type"
            value={selected3DObject?.value || ""}
            onChange={handleSelect}
            options={containers}
            className="!w-fit !border-black !h-[41px] !bg-[url('/images/Icons/chevron-down-gold.png')]
              bg-[length:8px_4px] bg-no-repeat bg-[right_19px_center] !pl-[29px] !pr-[36px]"
          />
        </div>
      </div>
      <div className="border-b-[2px] border-b-gray w-full pl-[55px] md:px-[40px]">
        <div className="max-w-[300px] w-full py-[32px]">
          <h3
            className="leading-[1.125] text-[16px] pb-[8px] tracking-[-0.8px]
            text-black font-radikal_medium font-[400]"
          >
            2. Upload your logo
          </h3>
          <p className="text-[16px] text-black font-radikal_light pb-[16px]">
            {isMobile ? (
              <>We recommend using PNG or SVG files for better visualization.</>
            ) : (
              <>
                We recommend using PNG or SVG files
                <br />
                for better visualization.
              </>
            )}
          </p>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            ref={filePickerRef as any}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="font-radikal_light text-[14px] flex gap-x-[10px] items-center
              border border-black rounded-[0.5rem] hover:border-blue
              pt-[12px] pr-[29px] pb-[10px] pl-[29px]"
            onClick={openPicker}
          >
            Browse files <Icon name="plus" raw color="#b19662" size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestLabelForm
