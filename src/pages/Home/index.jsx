//HOOKS
import { useState, useContext } from "react";

//CONTEXT
import {TeamContext}  from '../../store/HeroTeam';

//COMPONENTES BOOTSTRAP
import { Container, Row, Col, Alert } from "react-bootstrap";

//COMPONENTES
import NavbarHero from "../../components/Navbar";
import TeamList from "../../components/TeamList";
import TeamDetail from "../../components/TeamDetail";
import ModalHero from "../../components/Modal";
import HeroDetail from "../../components/HeroDetail";

const Home = () => {
  const [team, setTeam] = useContext(TeamContext);

  const [modalShow, setModalShow] = useState(false);

  const [heroDetail, setHeroDetail] = useState({});

  const handleDetailHero = ({id}) => {

    setModalShow(true);

    let hero = team.find(item => item.id === id);

    setHeroDetail(hero);
  }

  const handleDeleteHero = ({id}) => {

    let newArrHero = team.filter(item => item.id != id);

    setTeam(newArrHero);
  }


  return (
    <Container fluid className="p-0 m-0">

      <NavbarHero />

        {
          team.length > 0 ? (
            <Row className="my-3 mx-0">

              <Col className="m-auto">
                <TeamList 
                  setModalShow={setModalShow}
                  team={team} 
                  handleDetailHero={handleDetailHero}
                  handleDeleteHero={handleDeleteHero}
                />
              </Col>
  
              <Col xs={12} md={4}>
                <TeamDetail />
              </Col>

            </Row>

          ) : (
            <Row className="m-0">
              <Col className="p-0">
                <Alert variant="secondary" className="w-75 my-5 mx-auto p-5">Busca y agrega los heroes de tu equipo para comenzar!!</Alert>
              </Col>
            </Row>
          )
        }

      <ModalHero show={modalShow} onHide={() => setModalShow(false)}>
        <HeroDetail heroDetail={heroDetail} />
      </ModalHero>

    </Container>
  );
};
export default Home;
