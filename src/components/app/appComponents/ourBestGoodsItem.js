import styled from "styled-components";

import { Link } from "react-router-dom";

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 22px;
    height: 240px;
    width: 27.5%;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    font-size: .875rem;
    line-height: 1.25rem;
    color: #000;
    text-decoration: none;
    transition: opacity .15s ease;
    &:hover {
        color: #000;
        opacity: .7;
    }
`;

const ItemName = styled.p`
    margin: 10px 0;
`;

const ItemPrice = styled.p`
    text-align: end;
    font-weight: 700;
    margin: 0;
`;

const ItemImg = styled.div`
    text-align: center;
`;

const OurBestGoodsItem = ({ name, src, price, weight, id }) => {
    return (
        <Item to={`/ourcoffee/good/${id}`} >
            <ItemImg>
                <img src={src} alt="Product" />
            </ItemImg>
            <div>
                <ItemName>
                    {name + ' ' + weight} kg
                </ItemName>
                <ItemPrice>
                    {price}$
                </ItemPrice>
            </div>
        </Item>
    );
};

export default OurBestGoodsItem;