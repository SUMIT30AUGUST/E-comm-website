import Carousel from 'react-multi-carousel'

import "react-multi-carousel/lib/styles.css";
import {styled} from '@mui/material'

import { bannerData } from '../../constants/Data';


const Image = styled('img')({
    width:'100%',
    height:280
})


const responsive ={

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }; 

const Banner=()=>{
    return(
<Carousel
 responsive={responsive}
 swipeable={false}
 draggable={false}
 infinite={true}
 autoPlay={true}
 autoPlaySpeed={2000}
 keyBoardControl={true} //ia also true by default
 slidesToSlide={1}
 
 //Below props are to make Carousel smooth 
 containerClass="carousel-container"
 dotListClass="custom-dot-list-style"
 itemClass="carousel-item-padding-40-px"
>
  {
    bannerData.map((data,index)=>(
        <Image key={index} src={data.url} alt="banner"/>
    ))
    // bannerData.map((data)=>{
    //     return (<img src={data.url}/>)
    // })
  }
</Carousel>
    )
}

export default Banner;
