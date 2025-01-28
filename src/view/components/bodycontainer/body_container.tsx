import React from "react";// Certifique-se de ajustar o caminho corretamente
import posts from "../../../data/post.json";
import style from "./body_container.module.css";
import CardPost from "../cardpost/card_post";
import CreatePost from "../create_post/create_post";
interface BodyContainerProps {
  className?: string;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ className }) => {

   const handlePostSubmit = (content: string, image?: string) => {
     console.log("Post submitted:", content, image);
     // Aqui você pode adicionar a lógica para salvar o post
   };
  return (
    <div className={className}>
      <li className={style.header}>
        <ul className={style.headerTab}>For you</ul>
        <ul className={style.headerTab}>Following</ul>
      </li>
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
