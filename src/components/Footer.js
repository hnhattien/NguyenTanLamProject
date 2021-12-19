import React from 'react'
import styled from 'styled-components'
const FooterWrap = styled.section`
.socials_list > a{
    display: inline-block;
    margin-left: 10px;
}
    .info_item_body > p{
        margin: 0;
    }
    .info_item_head{
        font-weight: 700;
    }

    .left_footer_top_news_item{
        margin-bottom: 0.2rem;
    }

`
export default function Footer() {
    return (
        <FooterWrap className="footer-wrap mt-2 px-md-5 px-1 py-5" style={{borderTop: "1px solid rgba(10,10,10,0.1)"}}>
            <div className="container mw-100">
                <div className="row mb-5">
                    <div className="col">
                        <div className="footer_top d-flex flex-md-row flex-column justify-content-between">
                            <div style={{flex: "1 0 auto"}} className="left_footer_top text-start mb-5">
                                <h5 className="left_footer_top_title">what happened</h5>
                                <div className="left_footer_top_news korea_text">
                                    <p className="left_footer_top_news_item">[대한] 조선민주주의인민공화국의 공용어로</p>
                                    <p className="left_footer_top_news_item">[대한]  선민주주의인민공화국의 공용어로</p>
                                    <p className="left_footer_top_news_item">[대한] 국과 조선민주주의인민공화국의 공용어로</p>
                                    <p className="left_footer_top_news_item">[대한] 민조선민주주의인민공화국의 공용어로</p>
                                    <p className="left_footer_top_news_item">[대한] 민 조선민주주의인민공화국의 공용어로</p>
                                </div>
                            </div>
                            <div style={{flex: "1 0 auto"}} className="right_footer_top info_list d-flex justify-content-around">
                                <div className="info_item">
                                    <h6 className="info_item_head">about us</h6>
                                    <div className="info_item_body korea_text">
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                    </div>
                                </div>
                                <div className="info_item">
                                <h6 className="info_item_head">my order</h6>
                                    <div className="info_item_body korea_text">
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                    </div>
                                </div>
                                <div className="info_item">
                                <h6 className="info_item_head">my account</h6>
                                    <div className="info_item_body korea_text">
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        
                                    </div>
                                </div>
                                <div className="info_item">
                                <h6 className="info_item_head">help</h6>
                                    <div className="info_item_body korea_text">
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                        <p>조선민주주</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col">
                        <div className="footer_bottom d-flex flex-md-row flex-column align-items-center justify-content-between">
                            <div style={{flex: "1 1 0px"}} className="left_footer_bottom text-start">
                                <p>
                                    <span>&#169; 2020-2021 what happened corp</span> | (<span className="korea_text">대한)민국과 |
                                    대한 대한 | 대한 공화국의 : 356-00-00000 </span>
                                    <span className="korea_text">test0101@whathappened.co.kr   조선민주주의인민공화국 | FAX: 070-0000-00000 | 조선민주주의인민공화국 | 조선민주주의인민공화국</span>
                                </p>
                            </div>
                            <div style={{flex: "1 1 0px"}} className="right_footer_bottom socials_list text-end">
                                <a href="#"><span><img src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/N_icon.png"}></img></span></a>
                                <a href="#"><span><img src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/facebook_icon.png"}></img></span></a>
                                <a href="#"><span><img src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/blog_icon.png"}></img></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrap>
    )
}
