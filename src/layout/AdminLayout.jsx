import { Outlet } from "react-router-dom"
import HeaderAdmin from "../components/HeaderAdmin"
import FooterAdmin from "../components/FooterAdmin"

const AdminLayout = () => {
  return (
    <>
        <body className="bg-black">
            <HeaderAdmin />
                <main>
                    <Outlet />
                </main>  
        </body>
         
    </>
  )
}

export default AdminLayout