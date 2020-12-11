import React from "react";
import Link from "@frontity/components/link";

const PostEntryInfo = ({ author, date }) => {
  return (
    <div className="postInfo">
      {author && (
        <div className="author">
          by: <Link link={author.link}> {author.name}</Link>
        </div>
      )}
      <div className="date">on {date.toDateString()}</div>
    </div>
  );
};

export default PostEntryInfo;
