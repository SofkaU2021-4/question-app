import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import{ useNavigate} from 'react-router-dom'


const FormQuestion = () => {
  const navigate = useNavigate()

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postQuestion(formData,navigate)
      }

    return(
        <div>
            <h1>Este es un fomulario de question.</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Añadir nueva pregunta</label>
                <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input>
                <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>
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
                <button type="submit">Enviar</button>
            </form>

        </div>
    )

}

export default FormQuestion