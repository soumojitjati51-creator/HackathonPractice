// function ChatArea() {

//     const messages = [

//         {
//             sender: "ai",
//             text: "Hello Soumojit! How can I help your career journey today?"
//         },

//         {
//             sender: "user",
//             text: "Suggest me a roadmap for frontend development."
//         },

//         {
//             sender: "ai",
//             text: "Start with HTML, CSS, JavaScript, then move to React and Tailwind CSS."
//         }

//     ]

//     return (

//         <div
//             className="
//                 flex-1
//                 flex
//                 flex-col
//                 justify-between
//                 p-6
//                 text-white
//             "
//         >

//             {/* ================= TOP BAR ================= */}

//             <div
//                 className="
//                     bg-white/10
//                     backdrop-blur-lg
//                     border
//                     border-white/10
//                     rounded-2xl
//                     p-5
//                     mb-6
//                 "
//             >

//                 <h1 className="text-3xl font-bold text-sky-300">

//                     AI Career Assistant

//                 </h1>

//                 <p className="text-gray-300 mt-2">

//                     Ask career questions and receive AI-powered guidance.

//                 </p>

//             </div>

//             {/* ================= CHAT MESSAGES ================= */}

//             <div
//                 className="
//                     flex-1
//                     overflow-y-auto
//                     space-y-6
//                     pr-2
//                 "
//             >

//                 {messages.map((msg, index) => (

//                     <div
//                         key={index}
//                         className={`
//                             flex
//                             ${msg.sender === "user"
//                                 ? "justify-end"
//                                 : "justify-start"
//                             }
//                         `}
//                     >

//                         <div
//                             className={`
//                                 max-w-[70%]
//                                 px-5
//                                 py-4
//                                 rounded-2xl
//                                 shadow-lg
//                                 ${msg.sender === "user"
//                                     ? "bg-sky-500 text-white"
//                                     : "bg-white/10 backdrop-blur-lg border border-white/10 text-gray-100"
//                                 }
//                             `}
//                         >

//                             {msg.text}

//                         </div>

//                     </div>

//                 ))}

//             </div>

//             {/* ================= INPUT SECTION ================= */}

//             <div
//                 className="
//                     mt-6
//                     flex
//                     items-center
//                     gap-4
//                 "
//             >

//                 <input
//                     type="text"
//                     placeholder="Ask something about your career..."
//                     className="
//                         flex-1
//                         px-5
//                         py-4
//                         rounded-2xl
//                         bg-white/10
//                         border
//                         border-white/10
//                         outline-none
//                         text-white
//                         placeholder-gray-400
//                         focus:border-sky-400
//                     "
//                 />

//                 <button
//                     className="
//                         px-6
//                         py-4
//                         rounded-2xl
//                         bg-sky-500
//                         hover:bg-sky-600
//                         transition
//                         font-semibold
//                         shadow-lg
//                     "
//                 >

//                     Send

//                 </button>

//             </div>

//         </div>

//     )
// }

// export default ChatArea
// // function ChatArea() {

// //     return (

// //         <div className="flex-1 p-8 text-white">

// //             <h1 className="text-4xl font-bold text-sky-300">
// //                 AI Chat Dashboard
// //             </h1>

// //         </div>

// //     )
// // }

// // export default ChatArea
function ChatArea() {

    return (

        <div
            className="
                flex-1
                flex
                flex-col
                p-6
                text-white
            "
        >

            {/* TOP TITLE */}

            <div className="mb-6">

                <h1 className="text-3xl font-bold text-sky-300">
                    AI Career Assistant
                </h1>

                <p className="text-gray-300 mt-2">
                    Ask anything about career guidance.
                </p>

            </div>

            {/* EMPTY CHAT BODY */}

            <div
                className="
                    flex-1
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    overflow-y-auto
                    flex
                    items-center
                    justify-center
                "
            >

                <p className="text-gray-400 text-lg">
                    Your AI conversation will appear here...
                </p>

            </div>

            {/* INPUT AREA */}

            <div
                className="
                    mt-6
                    flex
                    gap-4
                "
            >

                <input
                    type="text"
                    placeholder="Ask your career question..."
                    className="
                        flex-1
                        p-4
                        rounded-2xl
                        bg-white/10
                        border
                        border-white/10
                        outline-none
                        text-white
                        placeholder-gray-400
                    "
                />

                <button
                    className="
                        px-6
                        py-4
                        bg-sky-500
                        hover:bg-sky-600
                        rounded-2xl
                        font-semibold
                        transition
                    "
                >

                    Send

                </button>

            </div>

        </div>

    )
}

export default ChatArea