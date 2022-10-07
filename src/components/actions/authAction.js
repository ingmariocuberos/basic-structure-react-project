import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import Swal from "sweetalert2"
import { auth } from "../../firebase/firebaseConfig"
import { logInAction, logOutAction } from "../../store/reducers/authReducer"
import { setError } from "../../store/reducers/errorReducer"

export const registerWithEmailAndPassword = (email, password) =>{
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
            let { accessToken, email, uid } = userCredentials.user;
            dispatch(logInAction({ accessToken, email, uid }));
        }).catch((error) =>{
            console.log('Error es: ', error)
        })
    }
}

export const loginWithEmailAndPassword = (emailIn, password) =>{
    return async (dispatch) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, emailIn, password);
            let { accessToken, email, uid } = userCredentials.user;
            dispatch(logInAction({ accessToken, email, uid }));
          } catch(e) {
            Swal.fire(
                'Error',
                'Credenciales incorrectas',
                'error'
              )
            setError('Credenciales inválidas');
          }
    }
}

export const logoutMid = () =>{
    return (dispatch) =>{
        signOut(auth).then(()=>{
            dispatch(logOutAction());
        });
    }
}