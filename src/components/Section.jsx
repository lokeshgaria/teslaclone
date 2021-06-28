import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section(props) {

    const { title, description, leftButton, rightButton, background } = props.data;
    return (
        <Wrap bgImg={background}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
                </Fade>
                <div>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        {
                            rightButton ? <RightButton>
                                {rightButton}
                            </RightButton> : null
                        }

                    </ButtonGroup>
                    </Fade>
                    <ButtonDown src="./images/down-arrow.svg" />
                </div>
            
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
height: 100vh;
width:100vw;
background-position: center;
background-repeat: no-repeat;
background-size: cover; 
display : flex;
flex-direction : column;
justify-content : space-between;
align-items:center;
background-image: ${props => `url(/images/${props.bgImg})`};
`;

const ItemText = styled.div`
padding-top : 15vh;
text-align: center;
`;

const ButtonGroup = styled.div`
display:flex;
justify-content : space-between;
margin-bottom : 30px;
@media (max-width : 768px){
    flex-direction : column;
}

`;
const LeftButton = styled.div`
text-transform: uppercase;
height:40px;
width :256px;
color : white;
background-color: rgba(23,26,32,0.8);
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.8;
font-size:12px;
cursor:pointer;
margin: 5px 12px;
`;
const RightButton = styled(LeftButton)`
background-color : #fff;
color:#000;
opacity:0.65;
`;
const ButtonDown = styled.img`
height : 40px;
overflow-x : hidden;
animation: animateDown 1.5s  infinite;
`;