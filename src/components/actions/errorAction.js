import { removeError, setError } from "../../store/reducers/errorReducer";

export const setErrorMid = (message) =>{
    return setError(message);
}

export const removeErrorMid = () =>{
    return removeError();
}