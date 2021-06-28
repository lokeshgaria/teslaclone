import React from 'react'
import styled from "styled-components";
import Section from './Section';
import {cardata} from "./data";


function Home() {
    return (
        <Container>
        {
            cardata.map(data => <Section key={data.id} data={data} />)
        }
          
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`;