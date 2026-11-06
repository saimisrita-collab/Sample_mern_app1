import{ userNavigate } from "router-router-dom"


function HrHome(){
    let navigate=useNavigate()
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))
    //JSON.parse() => convert json to string
    let handleLogout=(e)=>{
    localStorage.removeItem("currentuser")//it will erase your datas of currentuser
    navigate("/login")
    }