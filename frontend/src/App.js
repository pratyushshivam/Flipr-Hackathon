import React, { useEffect } from 'react'
import Login from './Login'
import Authorized from './Authorized'
import { useSelector } from 'react-redux'
function App() {
  const appAuth = useSelector(({ auth }) => auth)



  useEffect(() => {
    // alert("Alert")
    console.log(appAuth)
  }, [appAuth])
  return !appAuth.status ? <Login /> : (
    <div>
      <Authorized />
    </div>
  )
}

export default App
