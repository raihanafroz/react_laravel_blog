import { toast } from 'react-toastify';
export const toastError = ( errorsResponse ) =>{
    const { status, message, errors } = errorsResponse;
    if(status === "success"){
        return toast.info(message);
    } else if(status === "validation error"){
        for(let error in errors){
            toast.error(errors[error][0])
        }
    }
}