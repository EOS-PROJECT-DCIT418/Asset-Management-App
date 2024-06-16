import React from "react";
import styled from "styled-components";

const Container = styled.div`
   background: #fff;
   margin: 2em 3.5em;
   padding: 0.8em 1em;
   border-radius: 9px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0px 4px 12px 0px rgba(109, 121, 130, 0.06);
   
   p{
      color: #9B9B9B;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
`


const H1 = styled.h1`
   color: #2B2B2B;
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   margin-bottom: 0px;

`

const Button = styled.button`
   border: none;
   border-radius: 9px;
   color: #fff;
   background: #EFC000;
   padding: 0.6em 0.6em;
`

const PageTitle = (props) => {
    return(
        <Container>
            <div>
                <H1>{ props.title }</H1>
                <p>You have 0 { props.title }</p>
            </div>
            <div>
                <Button>Add { props.title }</Button>
            </div>
        </Container>

    )
}

export default PageTitle;