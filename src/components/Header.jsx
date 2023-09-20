import { Button } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Image, Logo, Nav, StyledHeader } from './styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader $bg='red'>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' />
          <Button>Try it</Button>
        </Nav>
        <Flex>
          <div>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam accusamus soluta ducimus minima doloribus delectus hic
              debitis quis alias mollitia.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              pariatur dolorum quod atque.
            </p>
            <Button $bg='#ff0099' $color='#fff'>
              Get started for free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
