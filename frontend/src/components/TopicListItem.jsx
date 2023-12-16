import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title }) => {
  return (
    <div className="topic-list__item">
      <a href={`/${slug}`} key={id}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;