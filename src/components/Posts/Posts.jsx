import "./Posts.css";

import postsContent from "../../constants/postsContent";

const Posts = () => {
  return (
    <div className="posts">
      <p className="posts__title">Posts from Instagram</p>
      <div className="posts__container">
        {postsContent.map((item) => (
          <div key={item.id} className="posts__photos">
            <img src={item.image} alt="" />
            <div className="posts__photos-content">
              <img src={item.logo} alt="" />
              <p className="posts__photos-content-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
