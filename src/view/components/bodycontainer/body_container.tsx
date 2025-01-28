import React, { useState } from "react";
import posts from "../../../data/post.json";
import style from "./body_container.module.css";
import CardPost from "../cardpost/card_post";
import CreatePost from "../create_post/create_post";

interface BodyContainerProps {
  className?: string;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<"forYou" | "following">("forYou");

  const handlePostSubmit = (content: string, image?: string) => {
    console.log("Post submitted:", content, image);
    // Lógica para salvar o post
  };

  return (
    <div className={className}>
      <div className={style.header}>
        <div
          className={`${style.headerTab} ${
            activeTab === "forYou" ? style.active : ""
          }`}
          onClick={() => setActiveTab("forYou")}
        >
          For you
        </div>
        <div
          className={`${style.headerTab} ${
            activeTab === "following" ? style.active : ""
          }`}
          onClick={() => setActiveTab("following")}
        >
          Following
        </div>
        <div
          className={style.indicator}
          style={{
            transform: `translateX(${activeTab === "forYou" ? "0%" : "100%"})`,
          }}
        />
      </div>
      <CreatePost onSubmit={handlePostSubmit} />
      <div className={style.posts}>
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;