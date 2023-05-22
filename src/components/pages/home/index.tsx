import { Container } from "./styles";
import Carrossel from "../carrossel";
export default function home() {
  return (
    <>
      <Container>
        <div className="carrossel-frame">
          <Carrossel />
        </div>
        <div className="img-templete">
          <img src="./src/assets/Leandro.png" alt="Leando Silva" />
        </div>
      </Container>

    </>
  )
}