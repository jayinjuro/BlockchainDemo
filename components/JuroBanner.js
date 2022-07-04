import Image from 'next/image'
import juroImage from './img/juroimg.jpg'

const JuroBanner =()=>{
    return <div>
        <Image src={juroImage} width="300px" height="75px"></Image>
    </div>
}

export default JuroBanner