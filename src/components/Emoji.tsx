import React from 'react'
import bullseye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumb from '../assets/thumbs-up.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
rating: number;
}

const Emoji = ({rating} : Props) => {
if (rating < 3) return null;
  
const emojiMap: { [key: number] : ImageProps} = {
    3: {src: meh, alt: 'meh', boxSize : '25px'},
    4: {src: thumb, alt: 'recommended', boxSize: '25px'},
    5: {src: bullseye, alt: 'exceptional', boxSize: '25px'},
}  

    return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji
