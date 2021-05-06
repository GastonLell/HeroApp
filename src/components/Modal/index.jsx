import { Modal, Button } from "react-bootstrap";

const ModalHero = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {props.children}
      </Modal>
  );
};
export default ModalHero;
