import React from 'react'
import { useSelector } from 'react-redux'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdFeedback, MdSubscriptions } from "react-icons/md";
import { PiUserRectangleFill } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaFlagCheckered } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { FaMusic } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { TbLivePhotoFilled, TbTrendingUp } from "react-icons/tb";
import { MdHelp } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { GiFilmSpool } from 'react-icons/gi';
import { FaPodcast } from "react-icons/fa";
import { GiHanger } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-48 h-screen shadow-md overflow-y-auto bg-white z-10 mt-24'>
      {/* First Section */}
      <div className='border-b-2 border-gray-400'>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <IoMdHome className='text-xl' />
          <li><Link to={'/'}>Home</Link></li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <SiYoutubeshorts className='text-xl' />
          <li>Shorts</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <MdSubscriptions className='text-xl' />
          <li>Subscription</li>
        </ul>
      </div>

      {/* Second Section */}
      <div className='border-b-2 border-gray-400 mt-3'>
        <p className='font-bold text-lg mx-2'>You</p>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <PiUserRectangleFill className='text-xl' />
          <li>Your channel</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <FaHistory className='text-xl' />
          <li>History</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <MdOutlinePlaylistAdd className='text-xl' />
          <li>Playlists</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <BiSolidVideos className='text-xl' />
          <li>Your Videos</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <MdLibraryBooks className='text-xl' />
          <li>Your Courses</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <MdWatchLater className='text-xl' />
          <li>Watch later</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <AiFillLike className='text-xl' />
          <li>Liked Videos</li>
        </ul>
      </div>
      
      <div className='border-b-2 border-gray-400 mt-3'>
        <p className='font-bold text-lg mx-2'>Explore</p>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <TbTrendingUp className='text-xl' />
          <li>Trending</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <HiShoppingBag className='text-xl' />
          <li>Shopping</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <FaMusic className='text-xl' />
          <li>Music</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <GiFilmSpool className='text-xl' />
          <li>Films</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <TbLivePhotoFilled className='text-xl' />
          <li>Lives</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <CgGames className='text-xl' />
          <li>Gaming</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <FaRegNewspaper className='text-xl' />
          <li>News</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <FaPodcast className='text-xl' />
          <li>Podcasts</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <GiHanger className='text-xl' />
          <li>Fashion & Beauty</li>
        </ul>
      </div>

      <div className='border-b-2 border-gray-400 mt-2'>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <IoMdSettings className='text-xl' />
          <li>Settings</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <FaFlagCheckered className='text-xl' />
          <li>Report History</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <MdHelp className='text-xl' />
          <li>Help</li>
        </ul>
        <ul className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
          <MdFeedback className='text-xl' />
          <li>Send Feedback</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
