import { useState } from "react";
import Mycontext from "./Mycontext";

const Myprovider = ({children}) => {

    const [user,Setuser] = useState(null)

    const login = (name) => Setuser({name})

     const register= (name) => Setuser({name})

      const logout = () => Setuser(null)

    return(
        <>
        <Mycontext.Provider value={{user,login,register,logout}}>
            {children}


        </Mycontext.Provider>
        
        </>
    )




}
export default Myprovider;