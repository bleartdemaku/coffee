import "./FeaturesCard.css";

import cardContent from "../../constants/cardContent";

function FeaturesCard() {
  return (
    <div className="card__container">
      {cardContent.map((item) => (
        <div key={item.id} className="card">
          <img src={item.icon} alt="" />
          <p className="card__title">{item.title}</p>
          <p className="card__content">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesCard;
