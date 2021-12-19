import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import productData from '../ProductData/data';
import { BsSuitHeartFill } from 'react-icons/bs';
const ProductsWrap = styled.section`

`
export default function Products() {
    const [isShowLess, setIsShowLess] = useState(true);
    const [product, setProduct] = useState([]);
    const toggleShowLess = () => {
        
        if(!isShowLess){
            setIsShowLess(true);    
            setProduct(productData.slice(0,10));
        }
        else{
           setIsShowLess(false);
           setProduct(productData);
        }
        
        
        
    }
    useEffect(() => {
        setProduct(productData.slice(0, 10));
    }, [])
    return (
        <ProductsWrap className="products py-5 mb-5">
            <div className="container">
                <div className="row">
                   <div className="col">
                      <ul className="products_list list-inline">
                        {product.map((value, index) => {
                            return <li key={index} style={{width: "200px", marginRight: "0.7rem"}} className="mb-5 product_item list-inline-item">
                                <div className="image">
                                    <img style={{objectFit: "contain", width: "100%", height: "100%"}} className="" src={`https://res.cloudinary.com/daybtcqjr/image/upload/v1639901691/apps/${value.img}`}></img>
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
                             <button onClick={toggleShowLess} className="py-1 see-more-btn bg-primary border-3 border border-secondary fw-bold px-4" id="toggle_show_less_product_btn">
                                {isShowLess ? "SEE MORE" : "LESS MORE"}
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </ProductsWrap>
    )
}
