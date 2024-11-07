import { Outlet,Navigate } from "react-router-dom"

function AuthLayout() {
  const isAutheticate=false;
  return (
    <div>
      {isAutheticate?(
        <Navigate to="/"/>
      ):(
        <>
        <section>
          <Outlet/>
        </section>
        </>
      )}
      
    </div>
  )
}

export default AuthLayout
