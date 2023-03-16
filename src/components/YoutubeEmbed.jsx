import React from "react";
import PropTypes from "prop-types";



const YoutubeEmbed = ({ embedId }) => (
  <div className="ss:mx-3 mx-2 border-yellow-300 ss:w-[500px] ss:h-[400px] w-[350px] h-[300px] border rounded-lg">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Matic Drive Presentation"
      className="rounded-lg w-full h-full"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;