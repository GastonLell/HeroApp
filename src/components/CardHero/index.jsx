//COMPONENTES BOOTSTRAP
import { Card, Button } from "react-bootstrap";

const CardHero = ({heroe, handleAddTeam}) => {

  return (
    <Card className="shadow my-3" border="ligth" style={{"width": "15rem"}}>
      <img
        style={{"max-height": "300px"}}
        src={heroe?.image?.url || "https://via.placeholder.com/400"}
      />
      <Card.Body>
        <Card.Title>{heroe.name}</Card.Title>
        <Button onClick={() => handleAddTeam(heroe.id)} variant="outline-dark">Agregar al equipo</Button>
      </Card.Body>
    </Card>
  );
};
export default CardHero;