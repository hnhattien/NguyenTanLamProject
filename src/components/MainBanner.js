import React from 'react'
import styled from 'styled-components'
import { CgArrowRight, CgArrowLeft } from 'react-icons/cg';
import media from '../media/media';
const Banner = styled.section`
    
    background-color:#F92800;
 
    .section_item{
        margin-bottom: 2em;
    }
    padding-top: 50px;
    padding-bottom: 100px;
    .e-main-banner-what-happened-market{
       width: 70%;      
    }
  
    @media ${media.xxs}{
        .lorem_item{
            margin-left: 2px;   
            padding-left: 2px;
            padding-right: 2px;
        }
        font-size: 0.85em;
        .progress-icon{
            width: 20px;
            height: 20px;
        }
    }
    @media ${media.md}{
        .lorem_item{
            margin-left: 3%;   
            padding-left: 3%;
            padding-right: 3%;
            
        }
        font-size: unset;
        .progress-icon{
            width: 50px;
            height: 50px;
        }
    }
   
    
        .lorem_button_item{
     
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            
        }
    
    
    .lorem_buttons{
        
    }
`
export default function MainBanner() {
    return (
        <Banner className="e-main-banner bg-e-main-banner d-flex justify-content-center">
           <div className="container mx-1 pb-4 h-100 d-flex flex-column justify-content-around">
               <div className="row section_item">
                    <div className="col my-2">
                    <h1 className="e-main-banner-title"><em>LAUNCHING OPEN EVENT</em></h1>
                       <img onMouseDown={(ev) => {ev.preventDefault()}} role="banner" src={'https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/e-main_banner_text.png'} className="e-main-banner-what-happened-market">

                       </img>
                    </div>
               </div>
               <div className="row section_item text-secondary border-secondary">
                    <div className="col">
                       <div className="fw-bold lorem_buttons d-flex justify-content-center align-items-center">
                            <span className="border-2 border border-secondary lorem_button_item lorem_item" role="button">
                                  LOREM IPSUM
                            </span>
                            <span className="lorem_button_item lorem_item"><CgArrowRight className="progress-icon" /></span>
                            <span className="border border-top-2 border-start-0 border-end-0 border-bottom-2 border-secondary lorem_item lorem_text_item" role="button">
                                MARKET<br/> LAUNCHING!
                            </span>
                            <span className="lorem_button_item lorem_item"><CgArrowRight className="progress-icon" /></span>
                            <span className="border-2 border border-secondary lorem_item lorem_button_item " role="button">
                                LOREM IPSUM
                            </span>
                       </div>
                    </div>
               </div>
           </div>
        </Banner>
    )
}
