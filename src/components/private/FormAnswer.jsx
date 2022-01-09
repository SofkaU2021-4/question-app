import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector,useDispatch  } from 'react-redux';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill"
import { useState,useEffect } from 'react';

const FormAnswer = ({idQuestion}) => {
    const[data,setData]=useState("")

    const dispatch=useDispatch();

    const state =useSelector(state=>state.auth)

    const submitForm = (e) => {
        e.preventDefault();
        console.log()
        dispatch(postAnswer(e.target.userId.value,e.target.questionId.value,data))
        setData("")
      }
    return(

        <div>
            <form className="mt-20  mb-36" onSubmit={submitForm} >
                <label>Añade una respuesta.</label>
                <ReactQuill  className=" bg-white"
                 modules={modules}
                 formats={formats}
                 value={data}
                 onChange={(e)=>{setData(e)}}
                 ></ReactQuill>
                <input hidden id="userId" type="text" value={state.user.uid} ></input>
                <input hidden id="questionId" type="text" value={idQuestion} ></input>
                <button type="submit">Enviar Respuesta</button>
            </form>
        </div>
    )

}

const modules = {
    toolbar: [
        [{ header: "1" }, {header: "2"}, {header: [3, 4, 5, 6]}, {font: []}],
        [{ size: [] }],
        [ "bold", "italic", "underline", "strike", "blockquote" ],
        [{ list: "ordered", }, { list: "bullet" }],
        ["image"],
        ["clean"],
        ["code-block"],
    ],
};
const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"link",
	"image",
	"video",
	"code-block"
];

export default FormAnswer