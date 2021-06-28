import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'; 
function Header() {
    const [burgerIcon , setIcon] = useState(false);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="logo img" />
            </a>

            <Menu>
                <a href="#">model S</a>
                <a href="#">model 3</a>
                <a href="#">model X</a>
                <a href="#">model Y</a>
                <a href="#">solar roof</a>
                <a href="#">solar panel</a>


            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#"> Account</a>
              
            </RightMenu>
            <MenuIcon style={{ fontSize: "30px", cursor: "pointer" }}onClick={() =>setIcon(true)}></MenuIcon>

            <BurgerMenu state={burgerIcon}>
                
                    <CustomClose>
                        <CloseIcon style={{ fontSize: "30px", cursor: "pointer" , margin : "0 0 21px 0" }} onClick={() => setIcon(false)} />
                    </CustomClose>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">trade-in</a></li>
                    <li><a href="#">cybertruck</a></li>
                    <li><a href="#">roadaster</a></li>
                    <li><a href="#">test drive</a></li>
                    <li><a href="#">semi</a></li>
                    <li><a href="#">charging</a></li>
                    <li><a href="#">powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">utilities</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">account</a></li>
                    <li><a href="#">find us</a></li>
                    <li><a href="#">Support</a></li>
                    
                    
                 
            </BurgerMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
top : 0;
right:0;
justify-content: space-between;
left:0;
padding: 0 20px;
z-index: 2;
a{
    padding : 0 22px;
}
`;

const Menu = styled.div`
display: flex;
align-items: center;
 
 
flex : 1;
justify-content: center;
a{
    font-weight : 700;
    font-size : 15px;
    padding : 0 10px;
    text-transform : capitalize;
}

@media (max-width : 768px){
    display: none;
}
`;

const RightMenu = styled.div`
display: flex;
align-items: center;
text-transform : capitalize;
justify-content: center;
 
a{
    font-weight : 600;
    font-size : 14px;
    padding : 0 10px;
}
@media (max-width : 768px){
    display: none;
}
`;

const BurgerMenu = styled.div`
width : 300px;
z-index : 5555;
position: fixed;
top: 0;
right : 0;
bottom : 0;
font-size : 16px;
text-align: start; 
display: flex;
flex-direction: column;
transition:   0.5s ease-in-out;
padding : 10px 20px ;
background-color: #fff;
overflow-y: scroll;
transform: ${props => props.state ? 'translateX(0%)' : 'translateX(100%)'};
li{
    list-style:  none;
    padding: 15px 0 ;
   font-weight: 600;
    
    
 a{
     padding : 0;
     text-transform : capitalize; 
 }
}
`;

const CustomClose = styled.div`
 
text-align: end;
`;