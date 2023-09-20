import { StyledCard } from './styles/CArd.styled';
import { Flex } from './styles/Flex.styled';

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard $layout={(id % 2 === 0 && 'row-reverse').toString()}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  );
};

export default Card;
