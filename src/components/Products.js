import React from 'react'
import styled from 'styled-components'
import productData from '../ProductData/data';
import { BsSuitHeartFill } from 'react-icons/bs';
const ProductsWrap = styled.section`

`
export default function Products() {
    return (
        <ProductsWrap className="products py-5">
            <div className="container">
                <div className="row">
                   <div className="col">
                      <ul className="products_list list-inline">
                        {productData.map(value => {
                            return <li style={{width: "200px", marginRight: "0.7rem"}} className="mb-5 product_item list-inline-item">
                                <div className="image">
                                    <img style={{objectFit: "contain", width: "100%", height: "100%"}} className="" src={`/apps/${value.img}`}></img>
                                </div>
                                <div className="info d-flex flex-column mt-4">
                                    <h5 style={{fontSize: "1em"}} className="text-start fw-bold">{value.title}</h5>
                                    <div className="d-flex justify-content-between">
                                        <span>{Intl.NumberFormat("en-uk", {maximumSignificantDigits: 15}).format(value.price).toLowerCase()} {'won'}</span>
                                        <span><BsSuitHeartFill color={"#fa7b26"} style={{marginRight: "5px",marginBottom: "4px"}}/>{value.vote_score}</span>
                                    </div>
                                </div>
                            </li>
                        })}
                      </ul>
                   </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="tool-btn">
                             <button className="py-1 see-more-btn bg-primary border-3 border border-secondary fw-bold px-4">
                                SEE MORE
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </ProductsWrap>
    )
}
