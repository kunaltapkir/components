import Button from "../components/Button";
import { GoCheck, GoCreditCard, GoEye, GoAlert, GoFlame } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5">
          <GoCheck />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseEnter={handleClick}>
          <GoCreditCard />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoEye />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoAlert />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoFlame />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
