import React,{Component} from 'react'
import {Carousel} from 'element-react'
import './marketCarousel.scss'
export  default class MarketCarousel extends Component{
  render(){
    return(
      <div className="carousel">
        <Carousel interval="4000" type="card" height="200px">
          {
            [1,2,3,4,5,6].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    )
  }
}