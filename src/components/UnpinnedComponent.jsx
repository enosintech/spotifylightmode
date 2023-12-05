
function UnpinnedComponent(props) {
  return (
    <div className={`w-[95%] min-h-[17%] mt-1 mb-1 ${props.theme === "dark" ? "text-white hover:bg-[rgb(51,51,51)]" : "hover:bg-gray-200 text-black"} cursor-pointer flex items-center px-1 rounded-lg`}>
        <div className={`w-[85%] h-[90%] flex items-center justify-between`}>
            <div className={`w-[23%] h-[90%] rounded-lg bg-red-500`}>
                <img 
                    src={props.image}
                    alt="Album Cover"
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className={`w-[72%] h-[90%] flex flex-col`}>
                <div className={`w-full h-1/2 flex items-center justify-start font-bold truncate`}>
                    {props.title}
                </div>
                <div className={`w-[65%] h-1/2 flex items-center justify-between`}>
                    <span className={`text-gray-400 text-[14px] ${props.theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>{props.mediaType}</span>
                    <span className='w-[4px] h-[4px] bg-gray-400 rounded-full'></span>
                    <span className={`text-[14px] ${props.theme === "dark" ? "text-gray-400" : "text-gray-700"} truncate`}>{props.artist}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnpinnedComponent;
