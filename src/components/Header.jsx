import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';
import { HAMBURGER_LOGO, USER_ICON, YOUTBE_SEARCH_QUERY, YOUTUBE_LOGO } from '../../utils/Constants';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchInputRef = useRef(null); // Ref for input field

    // Fetch search suggestions
    useEffect(() => {
        if (searchQuery === "") return; // Avoid API calls for empty queries

        const timer = setTimeout(() => getSearchSuggestions(), 200);

        return () => {
            clearTimeout(timer); // Clean up timeout
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTBE_SEARCH_QUERY + searchQuery);
        const json = await data.json();
        setSuggestions(json[1] || []); // Handle cases where suggestions may be empty
    };

    const dispatch = useDispatch();

    const toggleMenuhandler = () => {
        dispatch(toggleMenu());
    };

    // Handle scroll event to immediately hide suggestions
    useEffect(() => {
        const handleScroll = () => {
            if (searchInputRef.current === document.activeElement) {
                searchInputRef.current.blur(); // Blur input if focused
                setShowSuggestion(false); // Hide suggestions immediately
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener on unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=' fixed flex justify-between items-center top-0 left-0 p-2 shadow-lg w-full bg-white z-20'>
            <div className='flex'>
                <img
                    onClick={toggleMenuhandler}
                    className='w-20 h-14 cursor-pointer'
                    src={HAMBURGER_LOGO}
                    alt="Menu"
                />

                <img className='w-28 h-14' src={YOUTUBE_LOGO} alt="YouTube Logo" />
            </div>

            <div>
                <div>
                    <input
                        type="text"
                        className='border border-gray-400 px-2 py-1 w-96 rounded-l-full placeholder:italic'
                        placeholder="Search for anything"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                        ref={searchInputRef} // Reference for the input
                    />
                    <button className='border border-gray-400 px-2 py-1 rounded-r-full'>Search</button>
                </div>
                {showSuggestion && (
                    <div className='fixed bg-white py-2 px-2 w-[24rem] rounded-lg'>
                        <ul>
                            {suggestions.map((s, index) => (
                                <li
                                    key={index}
                                    className='px-2 py-2 shadow-sm hover:bg-gray-100 cursor-pointer border-b-2 border-gray-100'
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div>
                <img className='w-10 h-8 mr-2' src={USER_ICON} alt="User Icon" />
            </div>
        </div>
    );
};

export default Header;
