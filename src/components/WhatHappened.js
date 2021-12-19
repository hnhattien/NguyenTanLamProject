import React from 'react'
import styled from 'styled-components'
import { FaLongArrowAltRight } from 'react-icons/fa';
import media from '../media/media';
import { GrClose } from 'react-icons/gr';
const WhatHappenedWrap = styled.section`
    background-image: url(https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/what_happened_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -100px 0;
    padding-bottom: 200px !important;
    .simulate_browser_main{
        .news{
            @media ${media.xxs}{
                width: 90%;
            }
            
            @media ${media.lg}{
                width: 75%;
            }
        }
    }
`
export default function WhatHappened() {
    return (
        <WhatHappenedWrap  className="what_happened_wrap py-5 bg-primary">
            <div className="container mx-0 mw-100">
                <div className="row">
                    <div className="col-md-6 col-12 m-auto">
                        <div className="what_happened_head">
                            <h1 className="fw-bold">WHAT HAPPENED</h1>
                            <p className="">How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first step to your brand's success . How to create mobile-optimized videos in minutes.</p>
                            <button className="py-1 mt-4 see-more-btn bg-transparent border-3 border border-secondary fw-bold px-4">
                                SEE MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-5 col-11 m-auto p-0">
                        <div className="what_happened_bottom simulate_browser text-primary">
                            <div style={{alignItems: "center"}} class=" px-2 bg-secondary simulate_browser_top d-flex justify-content-between">
                                <div>
                                    <img src="https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/artisk.png" style={{width:"15px"}}></img>
                                    <span className="fw-bold m-0 ms-2">What Happened</span>
                                </div>
                                <div className="position-relative px-3 d-flex flex-column" style={{flex: "1 0 auto", alignItems: "center"}}>
                                    <AbstractLine/>
                                    <AbstractLine style={{marginTop: "5px"}} />
                                </div>
                                <span role="button"><GrClose color='#fff'/></span>
                            </div>
                            <div className="simulate_browser_search_bar px-2 border border-2 border-secondary d-flex bg-primary text-secondary justify-content-between" style={{fontSize: "0.8rem", alignItems: "center", lineHeight: "initial", paddingTop: "2px", paddingBottom: "2px"}}>
                                <span className="fw-bold">WWW.WHPN.COM/BRANDSTORY</span>
                                <span><FaLongArrowAltRight size={"1rem"} /></span>
                            </div>
                            <div className="simulate_browser_main position-relative text-secondary d-flex justify-content-center">
                                <img className="mw-100 w-100" src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/simulate_browser_main.png"}>
                                </img>
                                <div style={{bottom: "50px"}} className="d-flex news position-absolute fw-bold border border-2 border-secondary">
                                    <div className="d-flex justify-content-center align-items-center px-2" style={{backgroundColor: "#FCDE01", flex: "1 0 auto"}}>HAPPY</div>
                                    <div className="text-center w-100" style={{backgroundColor: "rgba(255,255,255,0.9)"}}>대한민국과 조선민주주의인민공화국의 공용어로 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WhatHappenedWrap>
    )
}


const AbstractLine = styled.span`
    
    --thickness: 2px;
    background-image: linear-gradient(180deg, #ADADAD, var(--thickness), transparent 0), linear-gradient(180deg, #ADADAD, var(--thickness), transparent 0);
    background-size: 5px 5px;

    height: 2px;
    width: 100%;
    top: 0;
    
    display: inline-block;
    
`
