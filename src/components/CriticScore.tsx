import { Badge, HStack } from "@chakra-ui/react";

interface Props {
    score:number;
}

const CriticScore = ({score} : Props) => {
  let color = score >90 ?'green' : score >80 ? 'yellow' : '';

    return (
    

<Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={4}>{score}</Badge>
   )
}

export default CriticScore
