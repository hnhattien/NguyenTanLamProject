import React, { useCallback } from 'react'
import styled from 'styled-components'
const BestProductWrap = styled.section`
.description_go_button{
font-weight: 800;
}
    .product{
        position: relative;
        .rank{
            position: absolute;
            img{
                width: 50px;
                height: 50px;
            }
            top: -25px;
            
            
            .rank_value_wrap{
                .rank_value{
                    text-decoration: underline !important;
                    font-size: 1rem;
                    font-weight: 900;
                    
                }
               
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        
    }
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
        for (let i = 0; i < 500; i++) {
            elements.push(<span className="grid_item"></span>)
        }
        return elements;
    }, [])
    return (
        <BestProductWrap className="best_product pt-5">
            <div className="container mt-4 mx-0" style={{ maxWidth: "100%" }}>
                <div className="row">
                    <div className="col-12 col-md-6 m-auto">
                        <div className="best_product_title m-auto" style={{ color: "#f96400" }}>
                            <h1>BEST PRODUCT</h1>
                            <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. to your brand's success . How to create mobile-optimized videos in minutes</p>
                        </div>
                    </div>
                </div>
                <div className="row best_product_grid_bg mt-4">
                    <div className="col">
                        <div className="best_product_content">
                            <ul className="list-inline product-list">
                                <li className="list-inline-item product-item">
                                    <div className="product">
                                        <div className="image">
                                            <img src={'/apps/best_product_1.png'}>
                                            </img>
                                        </div>
                                        <div style={{ lineHeight: "initial" }} className="description bg-primary border border-2 border-secondary py-2 w-75">
                                            <span className='description_text'>How to create mobile-optimized videos</span>
                                            <span className="description_go_button bg-secondary text-primary" role="button">GO</span>
                                        </div>
                                        <div className="rank">
                                            <img src={"/apps/best_product_part_image.png"} />
                                            <div className="rank_value_wrap">
                                                <span className="rank_value">01</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ position: "relative", right: "20px" }} className="list-inline-item product-item">
                                    <div className="product">
                                        <div className="image">
                                            <img style={{ height: "365px" }} src={'/apps/best_product_2.png'}>
                                            </img>
                                        </div>
                                        <div className="description bg-primary border border-2 border-secondary py-2 w-75">
                                            <span style={{ lineHeight: "initial" }} className='description_text'>How to create mobile-optimized videos</span>
                                            <span className="description_go_button bg-secondary text-primary" role="button">GO</span>
                                        </div>
                                        <div className="rank">
                                            <img  src={"/apps/best_product_part_image.png"}/>
                                            <div className="rank_value_wrap">
                                                <span className="rank_value">02</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ position: "relative", right: "20px" }} className="list-inline-item product-item">
                                    <div className="product">
                                        <div className="image">
                                            <img src={'/apps/best_product_3.png'}>
                                            </img>
                                        </div>
                                        <div style={{ lineHeight: "initial" }} className="description border border-2 border-secondary bg-primary py-2 w-75">
                                            <span className='description_text'>How to create mobile-optimized videos</span>
                                            <span className="description_go_button bg-secondary text-primary" role="button">GO</span>
                                        </div>
                                        <div className="rank">
                                            <img  src={"/apps/best_product_part_image.png"}/>
                                            <div className="rank_value_wrap">
                                                <span className="rank_value">03</span>
                                            </div>
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
