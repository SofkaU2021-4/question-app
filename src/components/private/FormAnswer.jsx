import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector,useDispatch  } from 'react-redux';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAnswer = ({idQuestion}) => {
    const[data,setData]=useState("")

    const dispatch=useDispatch();

    const state =useSelector(state=>state.auth)

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(postAnswer(e.target.userId.value,e.target.questionId.value,data,toast))
        setData("")
      }
    return(

        <div>
            <form className="mt-10  mb-36" onSubmit={submitForm} >
                <label>Añade una respuesta.</label>
                <ReactQuill  className=" bg-white"
                 modules={modules}
                 formats={formats}
                 value={data}
                 onChange={(e)=>{setData(e)}}
                 ></ReactQuill>
                <input hidden id="userId" type="text" value={state.user.uid} ></input>
                <input hidden id="questionId" type="text" value={idQuestion} ></input>
                <button className=" bg-green-500 mt-5 rounded-full px-3 py-2 text-white" type="submit">Enviar Respuesta</button>
            </form>
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
            />
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