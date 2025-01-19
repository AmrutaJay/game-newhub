import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card>
        
        <Skeleton startColor='pink.500' endColor='orange.500' height="200px" />
<CardBody>
<SkeletonText />
</CardBody>
    </Card>
  )
}

export default GameCardSkeleton;
