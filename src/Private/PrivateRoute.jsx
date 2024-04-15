import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const PrivateRoute = ({children}) => {

const {user} = useContext(AuthContext)

const location = useLocation();

  if(user){
    return children;
  }
  else{
    return <Navigate to='/login'/>
  }

}

export default PrivateRoute