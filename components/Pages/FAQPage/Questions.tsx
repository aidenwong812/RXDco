import questions from "../../../utils/faq-questions.json"
import Question from "./Question"

const Questions = () => (
  <>
    {questions.map((question, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Question key={i} data={question} />
    ))}
  </>
)

export default Questions
