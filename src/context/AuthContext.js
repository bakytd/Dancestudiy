import { createContext, useEffect, useContext, useState } from 'react'
import { auth } from '../firebase'


const AuthContext = createContext({
    currentUser:null,
})
export const useAuth = () => useContext (AuthContext)
export default function AuthContextProvider({children}){
    const [currentUser, setCurrentUser]= useState(null)
    const value = {
        currentUser
    }
    return <AuthContext.Provader value={value}>{children}</AuthContext.Provader>
}