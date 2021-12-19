import React from 'react'
import styled from 'styled-components'
const IntroductionBlock = styled.section`
    height: 380px;
    background-image: url(https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/introduction_banner.png);
    background-size: cover;
    background-repeat: no-repeat;

    background-position: 0px -2px;

    .introduction_text{
       
    }
    .introduction_title{

    }
    
`
export default function Introduction() {
    return (
        <IntroductionBlock className="introduction text-primary">
            <div className="container h-100">
                 <div className="row d-flex h-100 align-items-center">
                    <div className="col-md-5 col-12">
                        <div className="introduction-content text-md-start text-center">
                            <h1 className="introduction_title mb-4">What Happened!</h1>
                            <p className="introduction_text">
                            How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first step to your brand's success . How to create mobile-optimized videos in minutes
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </IntroductionBlock>
    )
}
