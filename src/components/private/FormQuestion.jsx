import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import{ useNavigate} from 'react-router-dom'
import ReactQuill from "react-quill"
import { useState } from 'react';


const FormQuestion = () => {
  const[data,setData]=useState("")
  const navigate = useNavigate()

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postQuestion(formData,navigate)
      }

    return(
        <div className="">

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
            <label className=" font-medium">Type</label>
                <select required className="" name="type" defaultValue="">
                  <option disabled type=""value=""></option>
                  <option type="String">OPEN</option>
                  <option type="String">OPINION</option>
                  <option type="String">WITH_RESULT</option>
                  <option type="String">WITH_EVIDENCE</option>
                </select>
                <label className="font-medium">Category</label>
                <select required name="category" defaultValue="">
                  <option disabled type=""value=""></option>
                  <option type="String">TECHNOLOGY_AND_COMPUTER</option>
                  <option type="String">SCIENCES</option>
                  <option type="String">SOFTWARE_DEVELOPMENT</option>
                  <option type="String">SOCIAL_SCIENCES</option>
                  <option type="String">LANGUAGE</option>
                </select>
                <ReactQuill  className=" bg-white mt-20"
                 modules={modules}
                 formats={formats}
                 value={data}
                 onChange={(e)=>{setData(e)}}
                 ></ReactQuill> 
                <button type="submit">Enviar</button>
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

export default FormQuestion