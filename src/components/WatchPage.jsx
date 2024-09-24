import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [likes, setLikes] = useState(0); // State for likes counter
  const [subscriberCount, setSubscriberCount] = useState(1000); // Initial subscriber count

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get('v');

  // Function to handle like button click
  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1); // Increment like counter
  };

  // Function to handle subscribe button click
  const handleSubscribe = () => {
    setSubscriberCount((prevCount) => prevCount + 1); // Increment subscriber count
  };

  return (
    <div className="m-5 p-5">
      {videoId ? (
        <>
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="mt-5">
            <div className="flex items-center space-x-4 mt-4">
              {/* Like Button */}
              <button
                onClick={handleLike}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                aria-label="Like this video"
              >
                👍 {likes} Likes
              </button>

              {/* Subscribe Button */}
              <button
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                aria-label="Subscribe to channel"
              >
                Subscribe ({subscriberCount})
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>No video found.</p>
      )}
    </div>
  );
};

export default WatchPage;
