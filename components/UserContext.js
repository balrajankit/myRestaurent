import React, { useContext, useMemo, useState } from 'react'
import { createContext } from 'react'
const userContext=createContext(null)
const UserContext = ({children}) => {
    



  
    const [favoriteList,setfavorite]=useState([])
    

const setfavoriteList=(item)=>
{
    setfavorite(item)
}

  return (
    <userContext.Provider value={{favoriteList,setfavoriteList}}>
        {children}
    </userContext.Provider>
  )
}

export default UserContext
export const shopContext =()=>
{
    return useContext(userContext)
}