import "./styles.css";

import { Card } from "react-bootstrap";

const HeroDetail = ({ heroDetail }) => {

  return (
    <Card className="card-detail">
      <Card.Body className="card-detail-container">
        <img
          src={heroDetail.image.url || "https://via.placeholder.com/400"}
        />

        <div className="px-4 d-flex flex-column justify-content-around card-detail-text">
          <h2>{heroDetail?.name}</h2>
          <h5>{heroDetail?.biography?.aliases[1]}</h5>
          <h4>Peso: {heroDetail?.appearance?.weight[1]} </h4>
          <h4>Altura: {heroDetail?.appearance?.height[1]} </h4>
          <h4>Color ojos: {heroDetail?.appearance["eye-color"]} </h4>
          <h4>Color Pelo: {heroDetail?.appearance["hair-color"]} </h4>
          <h4>Trabajo: {heroDetail?.work?.occupation} </h4>
        </div>
      </Card.Body>
    </Card>
  );
};
export default HeroDetail;
