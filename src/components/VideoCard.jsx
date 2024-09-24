import React from 'react'

const VideoCard = ({ info }) => {
  // Defensive checks to ensure info is defined
  if (!info || !info.snippet || !info.statistics) {
    return null; // Return nothing if info is undefined or missing properties
  }

  // Destructure snippet and statistics safely
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-4 w-96 shadow-lg'>
      {/* Check if thumbnails and its medium property exist */}
      {thumbnails?.medium?.url && (
        <img className='w-96 rounded-lg' src={thumbnails.medium.url} alt={title} />
      )}

      <ul>
        <li className='mt-2 font-bold'>{title}</li>
        <li className='py-3  font-semibold'>{channelTitle }</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
