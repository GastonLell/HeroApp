import {Card, Button} from 'react-bootstrap';

const HeroAdded = ({hero, seeTeam, setModalShow}) => {

    return(
        <Card className="w-100">
        <Card.Body>
          <img
            className="w-25"
            src={hero.image.url || "https://via.placeholder.com/400"}
          />

          <div className="px-4 my-3 d-flex flex-column justify-content-around card-detail-text">
            <h3>Agregaste a {hero?.name} a tu equipo!!</h3>
          </div>

          <div className="d-flex justify-content-around">
            <Button onClick={seeTeam} variant="info">Ver equipo</Button>
            <Button onClick={() => setModalShow(false)} variant="info">Seguir agregando</Button>
          </div>
        </Card.Body>
      </Card>

    )
}
export default HeroAdded;