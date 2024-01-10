import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

/**
 * TopicList Component
 * Renders a list of topics as clickable items. When a topic is clicked,
 * it triggers an action (such as fetching photos related to that topic).
 *
 * @param {Object} props - Component props
 * @param {Function} props.fetchPhotosByTopic - Function to fetch photos based on the selected topic
 * @param {Array} props.topics - Array of topic objects to be rendered in the list
 */
const TopicList = ({ fetchPhotosByTopic, topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Mapping through each topic and creating a list item */}
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id}
          {...topic}
          onClick={(e) => {
            e.preventDefault();
            fetchPhotosByTopic(topic.id);
          }}
        />
      ))}
    </div>
  );
};

export default TopicList;

