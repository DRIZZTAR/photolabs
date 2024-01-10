import React from "react";
import "../styles/TopicListItem.scss";

/**
 * TopicListItem Component
 * Represents an individual item in a topic list. It is essentially a link 
 * that triggers an action (like fetching photos related to the topic) when clicked.
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the topic
 * @param {string} props.slug - Slug or URL of the topic
 * @param {string} props.title - Display name of the topic
 * @param {Function} props.onClick - Function to handle click events on the topic item
 */
const TopicListItem = ({ id, slug, title, onClick }) => {
  return (
    <div className="topic-list__item">
      {/*Link to display photos by topic */}
      <a href={`/${slug}`} key={id} onClick={onClick}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
