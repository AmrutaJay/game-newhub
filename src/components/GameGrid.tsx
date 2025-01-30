import { SimpleGrid, Text} from "@chakra-ui/react"
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

 interface Props{
  gameQuery : GameQuery;
 
}

const GameGrid = ({gameQuery} : Props) => {
const {data, error, isLoading} = useGames(gameQuery);
const Skeletons = [1,2,3,4,5,6]

if (error) return <Text>{error}</Text>;

  return (
    <>
 
    <SimpleGrid 
    columns={{sm:1, md:2, lg:3, xl:4}} padding='10px' spacing={6}>
        {isLoading && Skeletons.map(skeleton => <GameCardContainer key={skeleton}> <GameCardSkeleton /> </GameCardContainer>)}
        
        {data.map((game) => (<GameCardContainer key={game.id} >  <GameCard  game={game}/> </GameCardContainer>))}
    </SimpleGrid>
    </>
  );
}

export default GameGrid;



///////////////////before extracting Query object//////////

// import { SimpleGrid, Text} from "@chakra-ui/react"
// import useGames, { Platform } from "../hooks/useGames"
// import GameCard from "./GameCard";
// import GameCardSkeleton from "./GameCardSkeleton";
// import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";

// interface Props{
//   selectedGenre : Genre | null
//   selectedPlatform : Platform | null
// }

// const GameGrid = ({selectedGenre,selectedPlatform} : Props) => {
// const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
// const Skeletons = [1,2,3,4,5,6]

//   return (
//     <>
//     {error && <Text>{error}</Text>}
//     <SimpleGrid 
//     columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={3}>
//         {isLoading && Skeletons.map(skeleton => <GameCardContainer key={skeleton}> <GameCardSkeleton /> </GameCardContainer>)}
        
//         {data.map((game) => (<GameCardContainer key={game.id} >  <GameCard  game={game}/> </GameCardContainer>))}
//     </SimpleGrid>
//     </>
//   );
// }

// export default GameGrid;
