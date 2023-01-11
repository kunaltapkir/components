import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Here is an important agreement for you to accept
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec magna non nibh vehicula gravida ac sit amet sapien. Etiam
        scelerisque dignissim sapien a cursus. Vestibulum lobortis vitae purus
        quis varius. Aliquam placerat mi nisi, at gravida neque sagittis non.
        Curabitur tincidunt quam eu semper accumsan. Morbi sed lacus nec nisl
        efficitur interdum sed a elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nam varius accumsan
        turpis eu viverra. Integer accumsan orci elit, id gravida leo hendrerit
        hendrerit. Nam venenatis pretium hendrerit. Fusce vehicula gravida orci,
        cursus bibendum lectus feugiat et. Aenean at urna in turpis pretium
        pretium.
      </p>
    </div>
  );
}

export default ModalPage;
