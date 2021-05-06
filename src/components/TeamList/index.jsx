import { Table, Button, ProgressBar } from "react-bootstrap";
import { CgDetailsMore } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";

const TeamList = ({ handleDetailHero, handleDeleteHero, team }) => {

  return (

    <Table variant="secondary" responsive="sm">

      <tbody>

        {!!team &&
          team.map((item) => {
            let { image, name, powerstats, id } = item;

            let arrPowerstats = Object.entries(powerstats);

            return (
              <tr>
                <td>
                  <img
                    style={{ width: "150px" }}
                    src={image?.url || "https://via.placeholder.com/150"}
                  />
                </td>

                <td>
                  <h3>{name}</h3>
                </td>

                <td>
                  <ul>
                    <li>
                      <strong>Poderes:</strong>
                    </li>
                    {arrPowerstats.map((power) => {
                      return (
                        <li>
                          {power[0].replace(/^\w/, (c) => c.toUpperCase())}:{" "}
                          <br />
                          <ProgressBar
                            variant="info"
                            now={power[1]}
                            label={`${power[1]}%`}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </td>

                <td className="d-flex justify-content-around">
                  <Button
                    variant="outline-info"
                    onClick={() => handleDetailHero({ id })}
                  >
                    <CgDetailsMore />
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={() => handleDeleteHero({ id })}
                  >
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default TeamList;
