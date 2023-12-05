import React from 'react'

function SongsComponent(props) {
  return (
    <div className='w-full h-[10%] flex items-center justify-center'>
        <div className={`w-[96%] h-full ${props.theme === "dark" ? "hover:bg-[rgb(71,71,71)]" : "hover:bg-gray-200"} rounded-xl mt-2 flex items-center justify-between pr-4`}>
            <div className='flex items-center'>
                <div className='px-3 font-light'>
                    {props.index + 1}
                </div>
                <div className="w-[50px] h-[50px] bg-black rounded-xl">
                    <img
                        src={props.image} 
                        className='w-full h-full rounded-xl object-cover'
                    />
                </div>
                <div className='ml-2'>
                    <h1 className='font-light'>{props.song}</h1>
                    <h1 className='font-bold'>{props.artist}</h1>
                </div>
            </div>
            <span className='font-light'>{props.album}</span>
            <span className='font-light'>{props.dateAdded}</span>
            <span className='font-light'>{props.duration}</span>
        </div>
    </div>
  )
}

export default SongsComponent;
