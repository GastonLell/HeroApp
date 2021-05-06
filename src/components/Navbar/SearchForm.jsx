
// HOOKS
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';

//CONTEXT
import {HeroesContext} from '../../store/Heroes';

//HELPERS
import getHero from '../../service/hero/getHero';

//COMPONENTES BOOTSTRAP
import { Form, FormControl, Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";

const SearchForm = () => {
  const history = useHistory();
  const [heroes, setHeroes] = useContext(HeroesContext);

  const handleGetHeroes = (event) => {
    
    event.preventDefault();

    let nameHero = event.target.nameHero.value.trim();

    getHero.searchHero({nameHero}).then(res => setHeroes(res.data.results));

    history.push('/search');
  }
  return (
    <Form inline onSubmit={handleGetHeroes}>

      <FormControl
        name="nameHero"
        type="text"
        placeholder="Agrega un heroe a tu equipo..."
        className="w-75"
      />

      <Button type="submit" variant="outline-info"><BiSearchAlt/></Button>

    </Form>
  );
};

export default SearchForm;
