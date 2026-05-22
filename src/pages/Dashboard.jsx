import Sidebar from "../components/Sidebar"
import ChatArea from "../components/ChatArea"

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

            <ChatArea />

        </div>

    )
}

export default Dashboard