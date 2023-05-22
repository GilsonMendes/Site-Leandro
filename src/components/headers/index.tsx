import { Container, Menu } from './styles';
export default function headerP() {
  return (
    <>
      <Container>
        <div>
          <h1>DESIGN SOCIAL MEDIA</h1>
        </div>
        <div>
          <Menu>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Quem sou eu? </a></li>
              <li><a href='#'>O que fazemos?</a></li>
              <li><a href='#'>Procedimento</a></li>
              <li><a href='#'>Investimento</a></li>
              <li><a href='#'>Pagamentos</a></li>
              <li><a href='#'>Informações</a></li>
            </ul>
          </Menu>
        </div>
      </Container>
    </>
  )
}