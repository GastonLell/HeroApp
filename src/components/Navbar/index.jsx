//ESTILOS
import './style.css';

//REACT ROUTER
import { Link, useHistory } from "react-router-dom";

//COMPONENTES
import SearchForm from './SearchForm';

//COMPONENTER BOOTSTRAP
import { Navbar, Button, Col } from "react-bootstrap";

//REACT ICONS
import { FaSignOutAlt } from "react-icons/fa";


const NavbarHero = () => {

  const history = useHistory();

  const handleSignOut = () => {

    localStorage.removeItem('token');

    history.push('/login')

  }

  return (
    <Navbar bg="dark" variant="dark" >

      <Col className="px-0 text-left" xs={2}>
        <Navbar.Brand className="hero-app">
          <Link to='/'>HA</Link>
        </Navbar.Brand>
      </Col>

      <Col xs={8} className="m-auto" >
        <SearchForm/>
      </Col>

      <Col xs={2} className="d-flex justify-content-md-end" >
        <Button variant="outline-info" onClick={handleSignOut}><FaSignOutAlt/></Button>
      </Col>

    </Navbar>
  );
};
export default NavbarHero;
