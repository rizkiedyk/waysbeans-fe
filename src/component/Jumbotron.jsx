import cssModules from "../modules/App.module.css";
import { Container } from "react-bootstrap";

function Jumbotron() {
  return (
    <Container className="w-75 bg-danger">
      <div className={cssModules.containerJumbotron}>
        <img src="/img/Waveswaves.png" alt="" className={cssModules.waves} />
        <img
          src="/img/IconwaysbeansJumbotron.png"
          alt="waysbeansJumbotron"
          className={cssModules.waysbeansJumbotron}
        />
        <h2 className={cssModules.h2Jumbotron}>BEST QUALITY COFFE BEANS</h2>
        <img
          src="/img/imgJumbotron.svg"
          alt="jumbotron"
          className={cssModules.imgJumbotron}
        />
        <div className={cssModules.divJumbotron}>
          <p>
            Quality freshly roasted coffe made just for you.
            <br />
            Pour brew end enjoy
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Jumbotron;
