import Questions from "./Questions"

const QuestionSection = () => (
  <div className="pb-[64px] md:pb-[80px]">
    <p
      className="text-center px-[18px] 
            text-[32px] md:text-[40px]
            font-radikal_light leading-[1.2] tracking-[-0.8px] 
            pb-[40px] md:pb-[78px]
            border-b border-b-igray"
    >
      Frequently asked questions
    </p>
    <Questions />
  </div>
)

export default QuestionSection
