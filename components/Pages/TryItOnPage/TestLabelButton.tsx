const TestLabelButton = ({ onClick }) => (
  <button
    type="button"
    className={`px-[30px] pt-[8.5px] pb-[10px] text-white bg-blue border border-blue hover:bg-white hover:text-blue
                        transition duration-[300ms] rounded-[0.5rem] font-radikal_medium text-[14px]`}
    onClick={onClick}
  >
    Test your Label
  </button>
)

export default TestLabelButton
