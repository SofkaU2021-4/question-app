import ReactQuill from "react-quill"
import '../../../node_modules/react-quill/dist/quill.snow.css';

const ViewAnswer = ({answer}) => {  

    return(
    <div>
        <div className=' bg-white mt-3'>
            <ReactQuill value={answer.answer}  
            modules={modules}   
            readOnly='true'/>
            
        
        </div>
        <hr></hr>
    </div>

    )
}

const modules = {
    toolbar: false
};



export default ViewAnswer