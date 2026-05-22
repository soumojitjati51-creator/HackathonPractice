import Sidebar from "../components/Sidebar"
import ChatArea from "../components/ChatArea"
import Topbar from "../components/Topbar"
function Dashboard() {

    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-900
                via-slate-800
                to-indigo-950
                flex
            "
        >

            <Sidebar />

            <div className="flex-1 p-6">
                <Topbar/>
                <ChatArea/>
            </div>

        </div>

    )
}

export default Dashboard