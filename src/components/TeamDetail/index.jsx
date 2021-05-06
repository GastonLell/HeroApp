//HOOKS
import { useState, useEffect, useContext } from "react";
//CONTEXT
import { TeamContext } from "../../store/HeroTeam";
//COMPONENTES BOOTSTRAP
import { Col, ProgressBar } from "react-bootstrap";

const TeamDetail = () => {
  const [team] = useContext(TeamContext);

  const [poderes, setPoderes] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  });

  const handlePowers = () => {
    let resultados = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };

    team.map((hero) => {
      resultados = {
        intelligence: resultados.intelligence + parseInt(hero.powerstats.intelligence),
        strength: resultados.strength + parseInt(hero.powerstats.strength),
        speed: resultados.speed + parseInt(hero.powerstats.speed),
        durability: resultados.durability + parseInt(hero.powerstats.durability),
        power: resultados.power + parseInt(hero.powerstats.power),
        combat: resultados.combat + parseInt(hero.powerstats.combat),
      };
    });
    setPoderes(resultados);
  };

  const orderByPowers = (objeto) => {
    let convertArray = Object.entries(objeto);

    let orderArray = convertArray.sort((a, b) => b[1] - a[1]);

    return orderArray;
  };

  const arrPoderes = orderByPowers(poderes);

  useEffect(() => {
    handlePowers();
  }, [team]);

  return (
    <Col>
      <h3 className="mb-3">Estadisticas de mi equipo</h3>
      <ul>
        {team.length > 0 &&
          arrPoderes.map((item) => {
            return (
              <li>
                {item[0].replace(/^\w/, (c) => c.toUpperCase())}

                <ProgressBar
                  variant="info"
                  now={item[1] / team.length}
                  label={`${Math.floor(item[1] / team.length)}%`}
                />
              </li>
            );
          })}
      </ul>
      <h4 className="mt-4">Tu equipo se destaca por: {arrPoderes[0][0].replace(/^\w/, (c) => c.toUpperCase())} </h4>
    </Col>
  );
};
export default TeamDetail;
