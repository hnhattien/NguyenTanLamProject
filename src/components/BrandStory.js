import React from 'react'
import styled from 'styled-components'
import media from '../media/media';
const BrandStoryWrap = styled.section`
    background-image: url(https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/brand_story_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
    @media ${media.xxs}{
        .brand_story_head{
            width: 100%;
        }
        background-position: 0 200px;
    }

    @media ${media.lg}{
        .brand_story_head{
            width: 50%;
        }
        background-position: 0 30px;
    }
`
export default function BrandStory() {
    return (
        <BrandStoryWrap className="brand_story pt-5" style={{ backgroundColor: "#0565bb", paddingBottom: "6rem" }}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="brand_story_head m-auto my-5" style={{color: "#fcd32a"}}>
                            <h1 className="title">BRAND STORY</h1>
                            <p className="text">How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Optimized videos in minutes</p>
                        </div>
                        <BrandBody />
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </div>
        </BrandStoryWrap>
    )
}

const BrandBodyWrap = styled.div`
    display: flex;
    margin: auto;
    


    @media ${media.xxs}{
        width: 100%;
    }
    @media ${media.lg}{
        width: 75%;
    }
    .inner_brand_story_body{
        width: 100%;
        @media ${media.xxs}{
        
        flex-direction: column;
        align-items: center;
        .brand_story_body_image, .brand_story_body_text{
            width: 100%;
            padding-bottom: 20px;
            button{
                margin-top: 5px;
            }
        }
    }
    @media ${media.lg}{
        flex-direction: row;
        justify-content: center;
        .brand_story_body_image, .brand_story_body_text{
           width: 50%;
           padding-bottom: unset;
            button{
                margin-top: unset;
            }
        }
    }
    }
    &::before{
     
    
    }
    position: relative;
`
const AbstractLine = styled.span`
position: absolute;
    --thickness: 2px;
    background-image: linear-gradient(180deg, blue, var(--thickness), transparent 0), linear-gradient(180deg, blue, var(--thickness), transparent 0);
    background-size: 5px 5px;
    height: 2px;
    width: 100%;
    top: 0;
    margin-top: 4px;
    display: inline-block;
    
`
const BrandBody = () => {
    return (
        <BrandBodyWrap className="border-2 border-secondary border pt-3 brand_story_body_wrap bg-secondary">
            <AbstractLine style={{top: "0"}}/>
            <AbstractLine style={{top: "5px"}}/>
                <BrandBodyWrap className="brand_story_body inner_brand_story_body bg-primary">
                <div className="brand_story_body_image">
                    <img className="mw-100 mh-100" src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/brand_story_body_image.png"}></img>
                </div>

                <div className="px-4 brand_story_body_text text-start">
                    <h5 className="title fw-bold">WHAT HAPPEND'S BRAND STORY</h5>
                    <p className="text korea-font">
                    대한민국과 조선민주주의인민공화국의 공용어로, 대한민국에서는 한국어 또는 한국말이라고 부르고, 조선민주주의인민공화국에서는 조선어 또는 조선말이라고 부른다. 한국과 북한에 비해서 인구는 적지만 중국 옌볜 조선족 자치주도 사용한다.


                    </p>
                    <button className="py-1 see-more-btn bg-primary border-3 border border-secondary fw-bold px-4">
                        SEE MORE
                    </button>
                </div>
            </BrandBodyWrap>
        </BrandBodyWrap>
    )
}
