import Button from "../components/Button";
import { GoBell, GoDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    
  };

  return (
    <>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDownload className="mr-1" />
          Secondary
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase className="mr-1" />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
    </>
  );
}

export default ButtonPage;
