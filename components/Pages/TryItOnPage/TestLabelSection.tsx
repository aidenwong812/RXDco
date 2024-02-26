import TestLabelForm from "./TestLabelForm"
import TestLabelViewer from "./TestLabelViewer"

const TestLabelSection = () => (
  <div
    className="w-full relative bg-secondarygray
      pt-[24px] pb-[128px] md:py-[128px] bg-[url('/images/try-bg.svg')]
      bg-cover flex justify-center"
  >
    <div
      className="max-w-[1275px] w-full px-[18px]
      grid grid-cols-1 md:grid-cols-3"
    >
      <TestLabelForm />
      <TestLabelViewer />
    </div>
  </div>
)

export default TestLabelSection
