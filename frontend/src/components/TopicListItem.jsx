import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title, onClick }) => {
  return (
    <div className="topic-list__item">
      <a href={`/${slug}`} key={id} onClick={onClick}>
        {console.log('TopicListItem.jsx: slug:', slug)}
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;