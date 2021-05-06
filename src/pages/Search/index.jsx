//HOOKS
import {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';

//CONTEXT
import {HeroesContext} from '../../store/Heroes';
import {TeamContext}  from '../../store/HeroTeam';

//HELPERS
import getHero from '../../service/hero/getHero';

//COMPONENTES
import CardHero from "../../components/CardHero";
import NavbarHero from "../../components/Navbar";
import ModalHero from "../../components/Modal";
import HeroAdded from "../../components/HeroAdded";

//COMPONENTES BOOTSTRAP
import { Container, Row, Alert } from "react-bootstrap";

const Search = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [hero, setHero] = useState({})
  const [heroes, setHeroes] = useContext(HeroesContext);
  const [team, setTeam] = useContext(TeamContext)
  const [alert, setAlert] = useState("");

  const handleAddTeam = (id) => {

    let ifExist = team.find(item => item.id === id);

    if(ifExist) {
      setAlert("Este heroe ya esta en tu equipo")
      return
    }

    if(team.length == 6) {
      setAlert("Solo puedes tener 6 heroes en tu equipo")
      return
    }

    getHero.getHero({id})
    .then(res => {
      let newHero = res.data
      setTeam([...team, newHero])
      setHero(newHero)
      setModalShow(true)
    })

  }
  
  const seeTeam = () => history.push("/")
  return (

    <Container fluid className="p-0">
        <NavbarHero />
      {
        !!heroes ? (
          <Row className="my-3 mx-0 d-flex justify-content-around ">
            {
              heroes.map(heroe => {
                return(
                 <CardHero heroe={heroe} handleAddTeam={handleAddTeam} />
                )
              })
            }
          </Row>
        ) : (
          <h3 className="p-3">Disculpe,no hay resultados para la busqueda ingresada</h3>
        )
      }

      <ModalHero show={modalShow} onHide={() => setModalShow(false)}>
        <HeroAdded seeTeam={seeTeam} hero={hero} setModalShow={setModalShow} />
      </ModalHero>

      {
        alert && (
          <Alert variant="danger">
            {alert}
          </Alert>
        )
      }
    </Container>
  );
};
export default Search;
