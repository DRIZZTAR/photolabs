import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, slug, title, onClick }) => {

  const handleClick = (e) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <div className="topic-list__item">
      <a href={`/${slug}`} key={id} onClick={handleClick}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
