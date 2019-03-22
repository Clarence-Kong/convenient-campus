import React, {Component} from 'react'
import MarketNav from './marketNav/marketNav'
import './market.scss'
import MarketCards from './marketCards/marketCards'
import MarketCarousel from './marketCarousel/marketCarousel'

export default class Market extends Component {

    render() {
        return (
            <div className={'Market'}>
                <MarketNav/>
                <MarketCarousel/>
                <ul>
                    {
                        [1, 2, 3, 4, 5].map((shop, index) => {
                            return (
                                <MarketCards key={index}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}