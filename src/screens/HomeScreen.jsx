import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { faHouseSignal } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';

import AlbumComponent from '../components/AlbumComponent';
import UnpinnedComponent from '../components/UnpinnedComponent';
import FriendsComponent from '../components/FriendsComponent';
import SongsComponent from '../components/SongsComponent';

import oldBone from "../assets/images/oldbone.webp";
import debut from "../assets/images/debut.jpeg";
import dontyou from "../assets/images/dontyou.webp";
import immunity from "../assets/images/immunity.jpeg";
import enos from "../assets/images/enos.jpeg";

function HomeScreen() {
    const [ theme, setTheme ] = useState("dark");
    const [ scrollTop, setScrollTop ] = useState(0);

    useEffect(() => {
        const container = document.querySelector(".scrollableContainer")
        container.addEventListener("scroll", () => {
            setScrollTop(container.scrollTop);
        })
        return () => {
            container.removeEventListener("scroll", () => {
                setScrollTop(container.scrollTop);
            })
        }
    }, [])

  return (
    <div className={`h-screen w-screen flex flex-col ${theme === "dark" ? "bg-black" : "bg-transparent"} backdrop-blur-xl transition-all`}>
        <div className='w-full h-[5%] relative'>
            <div className={`absolute right-3 w-fit h-full flex items-center justify-evenly gap-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                <span className={`font-bold text-[15px]`}>Dark Mode</span>
                <FontAwesomeIcon icon={theme === "dark" ? faToggleOn : faToggleOff} size="lg" className={`cursor-pointer hover:opacity-80 active:opacity-30 transition-all`} onClick={() => {
                    if(theme === "dark"){
                        setTheme("light")
                    } else {
                        setTheme("dark")
                    }
                }}/>
            </div>
            <div className='absolute left-3 w-[4%] h-full flex items-center justify-evenly group'>
                <div className='w-[13px] h-[13px] bg-red-500 active:bg-red-400 rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faTimes} size="2xs"  className='hidden group-hover:block'/>
                </div>
                <div className='w-[13px] h-[13px] bg-yellow-500 active:bg-yellow-300 rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faMinus} size="2xs" className='hidden group-hover:block'/>
                </div>
                <div className='w-[13px] h-[13px] bg-green-500 active:bg-green-400 rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='hidden group-hover:block text-[8px] rotate-90'/>
                </div>
            </div>
        </div>
        <div className='w-full h-[85%] flex'>
            <div className='w-1/5 h-full flex flex-col'>
                <div className='w-full h-[20%] flex items-center justify-center'>
                    <div className={`h-[90%] w-[95%] flex flex-col ${theme === "dark" ? "bg-[rgb(42,42,42)]" : "bg-white border-[0.25px]"} shadow rounded-xl`}> 
                        <div className='w-full h-1/2 flex items-center px-5 gap-3 hover:opacity-80 active:opacity-40 transition-all duration-150 cursor-pointer'>
                            <FontAwesomeIcon icon={faHome} size="xl" color={`${theme === "dark" ? "white" : "black"}`}/>
                            <span className={`${theme === "dark" ? "text-white" : "text-black"} font-bold`}>Home</span>
                        </div>
                        <div className='w-full h-1/2 flex items-center px-5 gap-3 hover:opacity-80 active:opacity-40 transition-all duration-150 cursor-pointer'>
                            <FontAwesomeIcon icon={faSearch} size="xl" color={`${theme === "dark" ? "white" : "black"}`}/>
                            <span className={`${theme === "dark" ? "text-white" : "text-black"} font-bold`}>Search</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[80%] flex items-center justify-center'>
                    <div className={`w-[95%] h-[98%] rounded-xl shadow ${theme === "dark" ? "bg-[rgb(42,42,42)] text-white" : " text-black bg-white border-[0.25px]"}`}> 
                        <div className="w-full h-[20%] flex flex-col">
                            <div className="w-full h-1/2 flex items-center justify-between pl-2">
                                <div className='w-[45%] h-full flex items-center justify-evenly hover:opacity-80 cursor-pointer'>
                                    <FontAwesomeIcon icon={faLayerGroup} size="lg"/>
                                    <span className='font-bold'>Your Library</span>
                                </div>
                                <div className="w-[30%] h-full flex items-center justify-evenly">
                                    <FontAwesomeIcon icon={faPlus} size="lg" className={`${theme === "dark" ? "hover:border-none" : "hover:border-[0.25px]"} ${theme === "dark" ? "hover:bg-[rgb(71,71,71)]" : "hover:bg-gray-200"} cursor-pointer active:opacity-25 p-2 rounded-full`}/>
                                    <FontAwesomeIcon icon={faArrowRight} size="lg" className={`${theme === "dark" ? "hover:border-none" : "hover:border-[0.25px]"} ${theme === "dark" ? "hover:bg-[rgb(71,71,71)]" : "hover:bg-gray-200"} cursor-pointer active:opacity-25 p-2 rounded-full`}/>
                                </div>
                            </div>
                            <div className='w-full h-1/2 flex items-center justify-evenly'>
                                <div className={`w-fit p-2 h-[60%] ${theme === "dark" ? "bg-[rgb(71,71,71)]" : "bg-white border-[0.25px]"} shadow rounded-full flex items-center justify-center font-normal text-[15px] cursor-pointer hover:opacity-80 transition-all active:opacity-30`}>
                                    Playlists
                                </div>
                                <div className={`w-fit p-2 h-[60%] ${theme === "dark" ? "bg-[rgb(71,71,71)]" : "bg-white border-[0.25px]"} shadow rounded-full flex items-center justify-center font-normal text-[15px] cursor-pointer hover:opacity-80 transition-all active:opacity-30`}>
                                    Podcasts & Shows
                                </div>
                                <div className={`w-fit p-2 h-[60%] ${theme === "dark" ? "bg-[rgb(71,71,71)]" : "bg-white border-[0.25px]"} shadow rounded-full flex items-center justify-center font-normal text-[15px] cursor-pointer hover:opacity-80 transition-all active:opacity-30`}>
                                    Albums
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[80%] flex flex-col overflow-scroll">
                            <div className='w-full h-[8%] flex items-center justify-between px-4'>
                                <FontAwesomeIcon icon={faSearch} size="lg" className={`${theme === "dark" ? "hover:border-none" : "hover:border-[0.25px]"} ${theme === "dark" ? "hover:bg-[rgb(71,71,71)]" : "hover:bg-gray-200"} cursor-pointer active:opacity-25 p-2 rounded-full`}/>
                                <div className="h-full w-[30%] flex items-center justify-center gap-2">
                                    <span>Recents</span>
                                    <FontAwesomeIcon icon={faList} size="md"/>
                                </div>
                            </div>
                            <div className={`w-full h-[92%] flex flex-col items-center`}>
                                <div className={`w-[95%] min-h-[17%] mt-2 rounded-xl shadow ${theme === "dark" ? "bg-[rgb(71,71,71)] text-white" : " text-black bg-white border-[0.25px]"} hover:opacity-80 cursor-pointer active:opacity-50 flex items-center justify-between px-1`}>
                                    <div className={`w-[85%] h-[95%] flex items-center justify-between`}>
                                        <div className={`w-[23%] h-[90%] rounded-lg bg-gradient-to-br from-purple-600 to-white flex items-center justify-center`}>
                                            <FontAwesomeIcon icon={faHeart} size="lg" color='white'/>
                                        </div>
                                        <div className={`w-[72%] h-[90%] flex flex-col`}>
                                            <div className={`w-[95%] h-1/2 flex items-center justify-start font-semibold text-[#1DB954]`}>
                                                Liked Songs
                                            </div>
                                            <div className={`w-[85%] h-[1/2] flex items-center justify-between`}>
                                                <span><FontAwesomeIcon icon={faThumbTack} size="md" color='#1DB954'/></span>
                                                <span className={`text-gray-400 text-[14px] ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>Playlist</span>
                                                <span className='w-[4px] h-[4px] bg-gray-400 rounded-full'></span>
                                                <span className={`text-[14px] ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>5,711 songs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-[15%] h-[95%] flex items-center justify-center`}>
                                        <FontAwesomeIcon icon={faVolumeHigh} size="md" color='#1DB954'/>
                                    </div>
                                </div>
                                {musicData.map((album, index) => (
                                    <AlbumComponent
                                        key={index} 
                                        index={index}
                                        theme={theme}
                                        {...album}
                                    />
                                ))}
                                {unpinnedData.map((album, index) => (
                                    <UnpinnedComponent 
                                        key={index}
                                        index={index}
                                        theme={theme}
                                        {...album}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/5 h-full flex items-center justify-center'>
                <div className={`scrollableContainer relative w-[99%] h-[98%] shadow ${theme === "dark" ? "text-white bg-[rgb(42,42,42)]" : "bg-white border-[0.25px]"} rounded-xl overflow-scroll`}>
                    <div className='sticky top-0 z-10 w-full h-[15%] flex flex-col'>
                        <div className={` w-full h-2/3 ${scrollTop >= 250 ? "bg-gradient-to-br" : "bg-none"} transition-all duration-200 from-[#40128B] to-[#190482] rounded-t-xl flex justify-between`}>
                            <div className='w-[40%] h-full flex'>
                                <div className='w-[35%] h-full flex items-center justify-center gap-4'>
                                    <div className='w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faChevronLeft} size="lg" color='white'/>
                                    </div>
                                    <div className='w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faChevronRight} size="lg" color='white'/>
                                    </div>
                                </div>
                                <div className={`w-[65%] h-full items-center justify-center gap-2 ${scrollTop >= 270 ? "opacity-100" : "opacity-0"} flex`}>
                                    <div className='w-[60px] h-[60px] bg-[#1DB954] rounded-full flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faPlay} size="lg" color='black'/>
                                    </div>
                                    <div className='font-extrabold text-[25px] text-white'>
                                        Liked Songs
                                    </div>
                                </div>
                            </div>
                            <div className='w-[18%] h-full flex items-center justify-evenly'>
                                <div className='bg-[rgb(61,61,61)] shadow w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faBell} size="lg" color="white"/>
                                </div>
                                <div className='bg-[rgb(61,61,61)] shadow w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faUserGroup} size="md" color="white"/>
                                </div>
                                <div className='bg-[rgb(61,61,61)] shadow w-[40px] h-[40px] rounded-full'>
                                    <img 
                                        src={enos}
                                        alt='Enos Pic'
                                        className='h-full w-full rounded-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`w-full h-1/3 px-5 transition-opacity ${scrollTop >= 318 ? "opacity-100" : "opacity-0"} flex ${theme === "dark" ? "bg-[rgb(71,71,71)]" : "bg-white shadow border-[0.25px]"} items-center justify-between`}>
                            <div className='w-full h-full flex items-center justify-between pr-5 pl-2'>
                                <div className="flex items-center justify-between w-[6%]">
                                    <span>#</span>
                                    <span>Title</span>
                                </div>
                                <span>Album</span>
                                <div className='flex items-center justify-between w-[11%]'>
                                    <span>Date Added</span>
                                    <FontAwesomeIcon icon={faCaretDown} color="#1DB954"/>    
                                </div>
                                <FontAwesomeIcon icon={faClock}/>
                            </div>
                        </div>
                    </div>
                    <div className='absolute z-0 top-0 w-full h-[40%] bg-gradient-to-b from-[#40128B] to-[#190482] pt-14 flex items-center px-10'>
                        <div className='w-[20%] h-[80%] rounded-xl flex items-center justify-center bg-gradient-to-br shadow from-[#190482] to-white'>
                            <FontAwesomeIcon icon={faHeart} size="4x" color='white'/>
                        </div>
                        <div className={`w-[50%] h-[80%] px-4 flex flex-col text-white`}>
                            <div className='h-[15%] w-full font-light text-[20px] flex items-center'>
                                Playlist
                            </div>
                            <div className='h-[70%] w-full font-extrabold text-[60px] flex items-center'>
                                Liked Songs
                            </div>
                            <div className='flex w-[40%] h-[15%] items-center justify-evenly'>
                                <img 
                                    src={enos}
                                    className="w-[20px] h-[20px] rounded-full"
                                />
                                <span className='font-light text-[13px]'>enos</span>
                                <div className='w-[4px] h-[4px] bg-gray-400 rounded-full'></div>
                                <span className='font-light text-[13px]'>5, 711 songs</span>
                            </div>
                        </div>
                    </div>
                    <div className='absolute w-full top-72 h-[15%] flex items-center justify-between'>
                        <div className='w-[25%] h-full flex items-center justify-evenly'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#1DB954] flex items-center justify-center'>
                                <FontAwesomeIcon icon={faPlay} size="lg" color='black'/>
                            </div>
                            <FontAwesomeIcon icon={faShuffle} size="2x" color={`${theme === "dark" ? "white" : "black"}`}/>
                            <div className={`w-[30px] h-[30px] border-[3px] ${theme === "dark" ? "border-white" : "border-black"} rounded-full flex items-center justify-center`}>
                                <FontAwesomeIcon icon={faArrowDown} size="md" color={`${theme === "dark" ? "white" : "black"}`}/>
                            </div>
                        </div>
                        <div className='w-[25%] h-full flex items-center justify-evenly'>
                            <FontAwesomeIcon icon={faSearch} size="lg"/>
                            <div className="w-[45%] h-[40%] flex items-center justify-between">
                                <span className="font-light">Date Added</span>
                                <FontAwesomeIcon icon={faList} size="lg"/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-96 w-full h-[6%] px-5 flex flex-col">
                        <div className='w-full h-full flex items-center justify-between pr-5 pl-2'>
                            <div className="flex items-center justify-between w-[6%]">
                                <span>#</span>
                                <span>Title</span>
                            </div>
                            <span>Album</span>
                            <div className='flex items-center justify-between w-[11%]'>
                                <span>Date Added</span>
                                <FontAwesomeIcon icon={faCaretDown} color="#1DB954"/>    
                            </div>
                            <FontAwesomeIcon icon={faClock}/>
                        </div>
                        <div className='w-full border-[0.25px]'></div>            
                    </div>
                    <div className="w-full h-[320px]">

                    </div>
                    {songData.map((song, index) => (
                            <SongsComponent 
                                key={index}
                                index={index}
                                theme={theme}
                                {...song}
                            />
                    ))}
                </div>
            </div>
            <div className='w-1/5 h-full flex items-center justify-center pl-3'>
                <div className={`w-full h-[98%] shadow rounded-xl flex flex-col items-center ${theme === "dark" ? "bg-[rgb(42,42,42)] text-white" : "text-black bg-white border-[0.25px]"}`}>
                    <div className='w-full h-[7%] flex items-center justify-between pl-2'>
                        <span className="font-bold">Friend Activity</span>
                        <div className='w-[25%] h-full flex items-center justify-center gap-2'>
                            <FontAwesomeIcon icon={faUserPlus} size="lg" className="hover:scale-110 hover:opacity-80 cursor-pointer"/>
                            <FontAwesomeIcon icon={faTimes} size="lg" className={`${theme === "dark" ? "hover:border-none" : "hover:border-[0.25px]"} ${theme === "dark" ? "hover:bg-[rgb(71,71,71)]" : "hover:bg-gray-200"} cursor-pointer active:opacity-25 p-2 rounded-full`}/>
                        </div>
                    </div>
                    <div className={`w-[98%] h-[92.5%] overflow-scroll`}>
                        {friends.map((friend, index) => (
                            <FriendsComponent 
                                key={index}
                                index={index}
                                {...friend}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[10%] flex justify-between relative">
            <div className={`w-[12%] h-full flex items-center justify-between pl-5`}>
                <div className='w-[60px] h-[60px]'>
                    <img 
                        src={oldBone}
                        className='w-full h-full object-cover shadow rounded-md'
                        alt='Song Cover'
                    />
                </div>
                <div className='flex flex-col w-[40%] h-[50px]'>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"} font-bold transition-all`}>Old Bone</span>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"} font-light transition-all`}>Wet</span>
                </div>
                <div className='w-[20px] h-[20px] bg-[#1DB954] shadow rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faCheck} className="text-[12px]"/>
                </div>
            </div>
            <div className='w-[40%] h-full flex flex-col absolute left-0 right-0 mx-auto'>
                <div className='w-full h-[70%] flex items-center justify-center'>
                    <div className='w-[45%] h-full flex items-center justify-evenly'>
                        <FontAwesomeIcon icon={faShuffle} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                        <FontAwesomeIcon icon={faBackwardStep} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                        <FontAwesomeIcon icon={faPlay} size="2xl" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                        <FontAwesomeIcon icon={faForwardStep} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                        <FontAwesomeIcon icon={faRepeat} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                    </div>
                </div>
                <div className='w-full h-[30%] flex items-center justify-between'>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"} font-light text-[14px]`}>1:52</span>
                    <div className='w-[85%] rounded-xl h-[20%] bg-gradient-to-r from-[#1db954] to-gray-500 from-60% to-60%'></div>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"} font-light text-[14px]`}>3:07</span>
                </div>
            </div>
            <div className='w-[22%] h-full flex items-center justify-between'>
                <div className={`h-full w-[55%] flex items-center justify-evenly`}>
                    <FontAwesomeIcon icon={faCirclePlay} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                    <FontAwesomeIcon icon={faMicrophone} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                    <FontAwesomeIcon icon={faLayerGroup} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                    <FontAwesomeIcon icon={faHouseSignal} size="lg" color={`${theme === "dark" ? "white" : "black"}`} className="hover:opacity-60 active:opacity-30 cursor-pointer"/>
                </div>
                <div className={`h-full w-[45%] flex items-center justify-between px-1`}>       
                    <FontAwesomeIcon icon={faVolumeLow} size="lg" color={`${theme === "dark" ? "white" : "black"}`}/>
                    <div className={"w-[80%] h-[10%] rounded-xl bg-gradient-to-r from-[#1db954] to-gray-500 from-40% to-40%"}></div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default HomeScreen;

const musicData = [
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
    {
        image: debut,
        title: "Debut",
        mediaType: "Album",
        artist: "Bjork"
    },
    {
        image: dontyou,
        title: "Don't You",
        mediaType: "Album",
        artist: "Wet"
    },
]

const unpinnedData = [
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
    {
        image: oldBone,
        title: "Old Bone",
        mediaType: "Album",
        artist: "Wet"
    },
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
    {
        image: immunity,
        title: "Immunity",
        mediaType: "Album",
        artist: "Clairo"
    },
]

const friends = [
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
    {
        name: "User",
        song: "Old Bone",
        artist: "Wet",
        album: "Old Bone",
        time: "25 min"
    },
]

const songData = [
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
    {
        image: immunity,
        song: "Impossible",
        artist: "Clairo",
        album: "Immunity",
        dateAdded: "10 Hours ago",
        duration: "3:49"
    },
]
