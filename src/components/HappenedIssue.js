import React from 'react'
import styled from 'styled-components'
const HappenedIssueWrap = styled.section`
    background-image: url(https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/dice_1.png), 
                      url(https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/dice_2.png);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: 95% 5%, 95% 100px;
    background-size: 50px, 60px;

`
export default function HappenedIssue() {
    return (
        <HappenedIssueWrap className="happened_issues_wrap pt-5 pb-2" style={{ backgroundColor: "#FDDE00" }}>
            <div className="container  mx-0 mw-100">
                <div className="row">
                    <div className="col-md-6 col-12 m-auto">
                        <div className="happened_issues_head">
                            <h1>HAPPENED'S ISSUE</h1>
                            <p className="korea-text">대한민국과 조선민주주의인민공화국의 공용어로, 대한민국에서는 한국어 또는 한국말이라고 부르고, 조선민주주의인민공화국에서는 조선어 또는 조선말이라고 부른다. 한국과 북한에 비해서 인구는 적지만 중국 옌볜 조선족 자치주도 사용한다.</p>
                            <button className="py-1 mt-4 see-more-btn bg-transparent border-3 border border-secondary fw-bold px-4">
                                SEE MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-auto p-0">
                        <div className="happened_issues_bottom">
                            <IssuesList />
                        </div>
                    </div>
                </div>
            </div>
        </HappenedIssueWrap>
    )
}

const IssuesListWrap = styled.div`
.issue_item{
    flex: 1 0 0;
    width: 25%;
 }
.issue_item.not_image{
    background-color: #FF3800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .square_box{
      background-image: url(https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/arrow_right.png);
      background-repeat: no-repeat;
      background-position: center;
    }
}
 display: flex;
 
`

const IssuesList = () => {
    return (
        <IssuesListWrap className="issue_list mt-5 pt-5 pb-5" >
       

       <div className="issue_item not_image position-relative">
           <h2 className="fw-bold" style={{marginBottom: "10%"}}>WHPN<br/>ISSUE</h2>
           <div className="bg-primary square_box border-4 border border-secondary" style={{width: "30%", height: "20%"}}>
                    
           </div>
           <img className="position-absolute" style={{width: "30%",right: "-5px",bottom:"-25px"}} src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/happned_issue_part.png"}></img>
        </div>    
    <div className="issue_item">
        <div className="bg-secondary text-primary fw-bold">B BRAND</div>
        <img className="issue_item_image mw-100" src="https://i.ibb.co/MPQ6ww8/B-Brand.png"/>
    </div>
    <div className="issue_item">
    <div className="bg-secondary text-primary fw-bold">C BRAND</div>
        <img className="issue_item_image mw-100" src="https://i.ibb.co/9HhhhV7/C-Brand.png"/>
    </div>
    <div className="issue_item position-relative">
    <div className="text-primary fw-bold" style={{backgroundColor: "#FF3800"}}>D BRAND</div>
        <img className="issue_item_image mw-100" src="https://i.ibb.co/9vvRdQP/D-Brand.png"/>
        <img src={"https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/lolhaha.png"} className="position-absolute" style={{width: "30%", right: "-20px", bottom: "-25px"}}></img>
    </div>
    <div className="issue_item">
        <div className="text-primary bg-secondary fw-bold"> E BRAND</div>
        <img className="issue_item_image mw-100" src="https://i.ibb.co/n6RFPLL/E-Brand.png"/>
    </div>
         
        </IssuesListWrap>
    )
}

