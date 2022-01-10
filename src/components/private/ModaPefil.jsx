import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useState, useEffect, useRef } from 'react';
import useFormData from '../../hooks/UseFormData';
import { useDispatch } from 'react-redux';
import { updateName } from '../../app/middleware/payloadQuestions';





const ModalPerfil = ({user}) => {
     const dispatch = useDispatch()

  const{form, formData, updateFormData}=useFormData();


  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [tabs, setTabs]=useState(false);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(updateName(formData))
    handleClose()
  }



  return (
<>
    {user?(
      <>
         <div >
      
      <div onClick={handleClickOpen('paper')} className="cursor-pointer text-white mr-4 flex items-center pl-4 py-1 ml-4 mb-3 text-sm rounded-3xl sidebar-route-disable">
                 <div className="flex">
                        <button  className="text-white shadow-md self-center font-bold border px-6 rounded-full py-1 bg-pink-700 ">Mi Perfil</button>
                    </div>
      </div>
      

  
        <Dialog
          className= "bg-black bg-opacity-50"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        > 
          <DialogTitle id="scroll-dialog-title">
            <Box>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center ">
                  <img className="rounded-full h-20" src={user.photo} alt="Profile"/>
                  <div className="ml-6">
                    <h1 className="id-perfil text-gray-300 font-normal">{user.uid}</h1>
                    <h1 className="nombre-perfil font-semidold"> {user.name}</h1>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-x-8 cursor-pointer">
                {tabs?(
                <>
                  <button onClick={()=>{setTabs(false)}} className="tabs-perfil-disable">Datos personales</button>
                  <button onClick={()=>{setTabs(true)}} className="tabs-perfil-active">Actualizar Nombre</button>

                </>):(<>
                  <button onClick={()=>{setTabs(false)}} className=" tabs-perfil-active">Datos personales</button>
                  <button onClick={()=>{setTabs(true)}} className="tabs-perfil-disable">Actualizar Nombre</button>

                </>)}
                
              </div>
            </Box>
          </DialogTitle>
          <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <div className="m-7 mt-2 texto-perfil">
          <div className="">
        {tabs?(<>
            <input type="text" hidden value={user.email} name="email" />
            <input type="text" hidden value={user.uid} name="uid" />
            <div>
              <label className=" font-medium">Nuevo nombre</label>
              <input className="text-sm w-full font-light pl-2 rounded-sm h-7 input-perfil mb-6" type="text" name="name" placeholder="Nuevo nombre" />
            </div>
              <div className="col-span-2 mt-5 w-1/4 self-center mx-auto">
                <input type="submit" className="self-center cursor-pointer filled-button w-full h-8"></input>
              </div>
           
        </>):(
            <div>
                <label className=" font-medium">Email</label>
                <h1 className="">{user.email} </h1>
            </div>
            )}
              <div>
            </div>
          </div>
          
        </div>
        </form> 
        </Dialog>
        
    </div>
      
      </>):(<></>)}

</>
  
    
 
  );
}

export default ModalPerfil ;