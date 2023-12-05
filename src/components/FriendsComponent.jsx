import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faUser } from "@fortawesome/free-solid-svg-icons";

function FriendsComponent(props) {
  return (
    <div className='w-full min-h-[15%] h-[15%] flex'>
        <div className='h-full w-[25%] flex items-center justify-center'>
            <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400'>
                <FontAwesomeIcon icon={faUser} size="lg"/>
            </div>
        </div>
        <div className="h-full w-[50%] flex flex-col justify-center">
            <h1 className='font-semibold'>{props.name}</h1>
            <div className='flex items-center gap-2'>
                <span className="font-light">{props.song}</span>
                <div className='w-[4px] h-[4px] bg-gray-400 rounded-full'></div>
                <span className='font-light'>{props.artist}</span>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faCompactDisc}/>
                <span className='font-light text-[13px]'>{props.album}</span>
            </div>
        </div>
        <div className="h-full w-[25%] flex items-start justify-end px-2">
            <span className='text-[12px] font-light'>{props.time}</span>
        </div>
    </div>
  )
}

export default FriendsComponent;
