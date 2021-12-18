import React, { useCallback } from 'react'
import styled from 'styled-components'
const BestProductWrap = styled.section`

    background-color: #FCD42F;
    position: relative;
    top: -3px;
    ul li{
        margin: 0 !important;
    }
    img{
        width: 350px;
        height: 350px;
    }
    .best_product_grid_bg{
        --thickness: 1px;
        --size: 20px; 

        background-image: linear-gradient(180deg, red var(--thickness), transparent 0), 
                            linear-gradient(90deg, red var(--thickness), transparent 0);
        
        background-size: var(--size) var(--size);
    }
    .best_product_content{
        .product{
            
        }

        .description{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: auto;
            position: relative;
            bottom: 20px;
            span:first-child{
                flex-basis: 70%;
                text-align: left;
                padding-left: 20px;
            }

            .description_go_button{
                border-radius:  100%;
                width: 40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
            }
        }
        
    }
    .grid_effect{
        .grid_item{
            border: 1px solid orange;
            padding: 20px;
        }
    }
`
export default function BestProduct() {
    const generateGrid = useCallback(() => {
        let elements = [];
        for(let i = 0; i < 500; i++){
            elements.push(<span className="grid_item"></span>)
        }
        return elements;
    }, [])
    return (
        <BestProductWrap className="best_product">
            <div className="container mx-0" style={{maxWidth: "100%"}}>
                <div className="row">
                    <div className="col-12 col-md-6 m-auto">
                        <div className="best_product_title m-auto" style={{color: ""}}>
                            <h1>BEST PRODUCT</h1>
                            <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first step to your brand's success . How to create mobile-optimized videos in minutes</p>
                        </div>
                    </div>
                </div>
                <div className="row best_product_grid_bg">
                    <div className="col">
                        <div className="best_product_content">
                            <ul className="list-inline product-list">  
                                <li className="list-inline-item product-item">
                                    <div className="product">
                                        <div className="image">
                                            <img src={'/apps/best_product_1.png'}>
                                            </img>
                                        </div>
                                        <div style={{lineHeight: "initial"}} className="description bg-primary border border-2 border-secondary py-2 w-75">
                                        <span className='description_text'>How to create mobile-optimized videos</span>
                                        <span className="description_go_button bg-secondary text-primary" role="button">GO</span>
                                        </div>
                                    </div>
                                </li>
                                <li style={{position: "relative", right: "20px"}} className="list-inline-item product-item">
                                <div className="product">
                                <div className="image">
                                            <img style={{height: "365px"}} src={'/apps/best_product_2.png'}>
                                            </img>
                                </div>
                                <div className="description bg-primary border border-2 border-secondary py-2 w-75">
                                <span style={{lineHeight: "initial"}} className='description_text'>How to create mobile-optimized videos</span>
                                        <span className="description_go_button bg-secondary text-primary" role="button">GO</span>
                                        </div>
                                </div>
                                </li>
                                <li style={{position: "relative", right: "20px"}} className="list-inline-item product-item">
                                    <div className="product">
                                    <div className="image">
                                                <img src={'/apps/best_product_3.png'}>
                                                </img>
                                    </div>
                                    <div style={{lineHeight: "initial"}} className="description border border-2 border-secondary bg-primary py-2 w-75">
                                        <span className='description_text'>How to create mobile-optimized videos</span>
                                        <span className="description_go_button bg-secondary text-primary" role="button">GO</span>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BestProductWrap>
    )
}
