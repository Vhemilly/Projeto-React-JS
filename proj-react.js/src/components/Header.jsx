import React from "react";
import {Link} from "react-router-dom"
import {styled} from 'styled-components';

const HeaderArea = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color:  teal;
    padding: 20px;
    margin-bottom: 50px;



    a {text-decoration: none;
    color: white;
    
    &:hover {
    text-decoration: underline;
    }
}
`;
export const Header = () => {

return(
    <HeaderArea>
        <Link to="/">Store</Link>
        <Link to="/cart">Cart</Link>
    </HeaderArea>

)
}