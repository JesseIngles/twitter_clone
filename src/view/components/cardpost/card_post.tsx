import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaRetweet,
  FaRegComment,
  FaComment,
  FaShareAlt,
  FaChartBar,
  FaRegBookmark,
} from "react-icons/fa";
import styles from "./card_post.module.css";

interface Author {
  username: string;
  name: string;
  profile_image: string;
}

interface Post {
  id: number;
  author: Author;
  content: string;
  image?: string;
  created_at: string;
  likes: number;
  view: number;
  retweets: number;
  comments: number;
  shares: number; 
  is_liked: boolean;
  is_retweeted: boolean;
  is_commented: boolean;
  is_shared: boolean; 
}

interface CardPostProps {
  post: Post;
}

const CardPost: React.FC<CardPostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.is_liked);
  const [isRetweeted, setIsRetweeted] = useState(post.is_retweeted);
  const [isCommented, setIsCommented] = useState(post.is_commented);
  const [isShared, setIsShared] = useState(post.is_shared);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
  };

  const handleComment = () => {
    setIsCommented(!isCommented);
  };

  const handleShare = () => {
    setIsShared(!isShared);
  };

  return (
    <div className={styles.cardPost}>
      <div className={styles.postHeader}>
        <img
          className={styles.profileImage}
          src={post.author.profile_image}
          alt={post.author.name}
        />
        <div className={styles.postHeaderTexts}>
          <h3 className={styles.authorName}>{post.author.name}</h3>
          <p className={styles.username}>{post.author.username}</p>
          <p className={styles.createdAt}>{post.created_at}</p>
        </div>
      </div>
      <p className={styles.content}>{post.content}</p>
      {post.image && (
        <img className={styles.postImage} src={post.image} alt="Post" />
      )}
      <div className={styles.postMetrics}>
        <div className={styles.metric} onClick={handleLike}>
          {isLiked ? (
            <FaHeart className={`${styles.icon} ${styles.liked}`} />
          ) : (
            <FaRegHeart className={styles.icon} />
          )}
          <span>{post.likes}</span>
        </div>
        <div className={styles.metric} onClick={handleRetweet}>
          {isRetweeted ? (
            <FaRetweet className={`${styles.icon} ${styles.retweeted}`} />
          ) : (
            <FaRetweet className={styles.icon} />
          )}
          <span>{post.retweets}</span>
        </div>
        <div className={styles.metric} onClick={handleComment}>
          {isCommented ? (
            <FaComment className={`${styles.icon} ${styles.commented}`} />
          ) : (
            <FaRegComment className={styles.icon} />
          )}
          <span>{post.comments}</span>
        </div>
        {/* Novo ícone de compartilhamento */}
        <div className={styles.metric} onClick={handleShare}>
          {isShared ? (
            <FaShareAlt className={`${styles.icon} ${styles.shared}`} />
          ) : (
            <FaShareAlt className={styles.icon} />
          )}
          <span>{post.shares}</span>
        </div>
       
        <div className={styles.metric}>
          <FaChartBar className={styles.icon} />
          <span>{post.view}</span>
        </div>

        <div className={styles.metric}>
          <FaRegBookmark className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default CardPost;
