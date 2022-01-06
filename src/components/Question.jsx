import { Link } from "react-router-dom"

const Question = ({question}) => {  

    return(
        <article className='question'>
            <p>{question.category}  - <small>{question.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            <Link to={`question/${question.id}`} className="button">
                View Question
            </Link>
        
        </article>
    )
}

export default Question