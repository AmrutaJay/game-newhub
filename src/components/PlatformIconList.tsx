import {FaWindows, FaPlaystation,FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from "react-icons";

interface Props {
    platforms : Platform [];

}

const PlatformIconList = ({platforms} : Props) => {
const iconMap: {[kay:string]: IconType} ={
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox:FaXbox,
    nintendo : SiNintendo,
    mac: FaApple,
    linux:FaApple,
    ios:MdPhoneIphone,
    web:BsGlobe,
    android: FaAndroid
}

  return (
    <HStack>
    {platforms.map((platform) => <Icon key={platform.id} as= {iconMap[platform.slug]}/>)}
  </HStack>
  );
};

export default PlatformIconList;
