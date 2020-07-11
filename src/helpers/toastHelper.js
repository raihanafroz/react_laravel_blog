import { toast } from 'react-toastify';
export const toastError = ( errorsMessages ) =>{
    const { status, message, errors } = errorsMessages;
    if(status === "success"){
        return toast.info(message);
    } else if(status === "validation error"){
        for(let error in errors){
            toast.error(errors[error][0])
        }
    }
}