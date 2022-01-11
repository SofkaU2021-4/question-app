import { questionsLoading ,questionsLoadSucces,questionsLoadError ,deleteQuestionLoad } from "../../actions/QuestionsActions";
import {oneQuestionLoadSucces , oneQuestionLoadError , oneQuestionLoading} from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading,myQuestionsLoadError, myQuestionsDelete } from "../../actions/MyQuestionsActions";
import {loginAction} from "../../actions/AuthorActions"
import axios from "axios";

const urlBase="https://shielded-sands-02777.herokuapp.com"


export const loadAllQuestion=()=>(dispatch)=>{
  
    dispatch(questionsLoading())

    const options = {
    method: 'GET',
    url: `${urlBase}/getAll`,
    headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}


export const loadById=(id)=>(dispatch)=>{
    dispatch(oneQuestionLoading())
    const options = {
        method: 'GET',
        url: `${urlBase}/get/${id}`,
        headers: {'Content-Type': 'application/json'}
        };
    
        axios.request(options).then(function (response) {
            dispatch(oneQuestionLoadSucces(response.data))
        }).catch(function (error) {
            dispatch(oneQuestionLoadError(error.message))
        });
}


export const postQuestion=(question,navigate)=>{

    const options = {
        method: 'POST',
        url: `${urlBase}/create`,
        headers: {'Content-Type': 'application/json'},
        data: question
      };
      
      axios.request(options).then(function (response) {
         navigate("/QuestionsPage")
      }).catch(function (error) {
        console.error(error);
      });
}


export const postAnswer=(userId,questionId,data,toast)=>(dispatch)=>{

  const options = {
      method: 'POST',
      url: `${urlBase}/add`,
      headers: {'Content-Type': 'application/json'},
      data: {userId:userId , questionId:questionId,answer:data}
    };
    
    axios.request(options).then(function (response) {
      toast.success('Respuesta creada con exito', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      dispatch(oneQuestionLoadSucces(response.data))
    }).catch(function (error) {
    });
}


export const deleteQuestion=(id,toast)=>(dispatch)=>{
  
    const options = {method: 'DELETE', url: `${urlBase}/delete/${id}`};

        axios.request(options).then(function (response) {
          dispatch(loadAllQuestion())
          toast.success('Respuesta creada con exito', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        }).catch(function (error) {
        console.error(error);
        });
}


export const getUserQuestion=(userId)=>(dispatch)=>{

    dispatch(myQuestionsLoading())

    const options = {
        method: 'GET',
        url: `${urlBase}/getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
      };
      axios.request(options).then(function (response) {
        dispatch(myQuestionsLoadSucces(response.data));
      }).catch(function (error) {
        dispatch(myQuestionsLoadError(error.message));
      });
}

export const postUser=(email,uid,url,name)=> async(dispatch)=>{

  const options = {
    method: 'POST',
    url: `${urlBase}/createUser`,
    headers: {'Content-Type': 'application/json'},
    data: {uid:uid, email:email, pictureUrl: url, name:name }
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}


export const getUser=(uid)=> async(dispatch)=>{

  const options = {
    method: 'GET',
    url: `${urlBase}/getUser/${uid}`,
    headers: {'Content-Type': 'application/json'},
  };
  
  await axios.request(options).then(function (response) {
    dispatch(loginAction(response.data.email,response.data.name,response.data.uid,response.data.pictureUrl));
  }).catch(function (error) {
    console.error(error);
  });
}

export const updateName=(data)=>(dispatch)=>{

  const options = {
    method: 'PUT',
    url: `${urlBase}/updateUser`,
    headers: {'Content-Type': 'application/json'},
    data: data
  };
  
  axios.request(options).then(function (response) {
    dispatch(loginAction(response.data));
  }).catch(function (error) {
    console.error(error);
  });

}

export const deleteAnswer=(id)=>(dispatch)=>{

  const options = {method: 'DELETE', 
   url: `${urlBase}/answer/${id}`};

  axios.request(options).then(function (response) {
    dispatch(loadById(response.data))
  }).catch(function (error) {
    console.error(error);
  });
  

}






