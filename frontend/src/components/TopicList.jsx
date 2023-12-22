import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ fetchPhotosByTopic, topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          {...topic} 
          onClick={() => fetchPhotosByTopic(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;