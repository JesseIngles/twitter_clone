import React, { useState } from "react";
import styles from "./create_post.module.css";
import { FaImage } from "react-icons/fa"; 

interface CreatePostProps {
  onSubmit: (content: string, image?: string) => void; 
}

const CreatePost: React.FC<CreatePostProps> = ({ onSubmit }) => {
  const [content, setContent] = useState(""); 
  
  const [image, setImage] = useState<string | null>(null); 
  const [imagePreview, setImagePreview] = useState<string | null>(null); 

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file.name); 
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file); 
    }
  };


  const handlePostSubmit = () => {
    if (content.trim()) {
      onSubmit(content, image ? image : undefined);
      setContent(""); 
      setImage(null); 
      setImagePreview(null);
    }
  };

  return (
    <div className={styles.createpostcontainer}>
      <div className={styles.createPostHeader}>
        <h3>Create a Post</h3>
      </div>
      <textarea
        className={styles.contentField}
        value={content}
        onChange={handleContentChange}
        placeholder="What's happening?"
      />
      {imagePreview && (
        <div className={styles.imagePreview}>
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
      <div className={styles.actions}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.imageInput}
        />
        <FaImage className={styles.imageIcon} />
        <button
          className={styles.submitButton}
          onClick={handlePostSubmit}
          disabled={!content.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
