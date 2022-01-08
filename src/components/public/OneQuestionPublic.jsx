import { Link } from "react-router-dom"

const OneQuestionPublic = ({question}) => {

    return(
        <button key={question.id} to={`/private/question/${question.id}`}>
        <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100  ">
        <div className="mx-6 mb-5">
            <div className="flex">
                    <i className="fas fa-question text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"></i>
                <div className="card-info w-full align-center flex justify-between">
                    <span className="font-semibold pt-3">{question.question}</span>
                    <div className="edit-card pt-4 space-x-5">
                </div>
                </div>
            </div>
            </div>
        </div>
   

    </button>
    )
}

export default OneQuestionPublic