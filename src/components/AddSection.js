import React, { useState } from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
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
   cursor: pointer;

   &:hover{
     background : #EFC444;
   }
`

const InputWrapper = styled.div`
   height: 104px;
   border-radius: 9px;
   background: #FFFFFF;
   margin: 2em 3.5em;
   padding: 1em;
   display: flex;
   flex-direction: row;
`
const InputDiv = styled.div`
   border-radius: 6px;
   background: #F6F8FA;
   padding: 0.5em 2em;
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;

`
const Input = styled.input`
   border-radius: 9px;
   border: 1px solid #D9D9D9;
   background: #FFF;
   margin: 1em;
   // height: 2.3em;
   padding: 0.5em;
`
const SaveButton = styled.button`
   border-radius: 10px;
   background: rgba(162, 162, 162, 0.54);
   color: #fff;
   padding: 0.4em 0.6em;
   margin-left: 0em;
   border: none;
   cursor: pointer;
   ${({ enabled }) =>
      enabled &&
      `
        background: #EFC000; /* green color when enabled */
        color: #fff;
      `}
`
const CancelButton = styled.button`
   border-radius: 15px;
   background: transparent;
   color: #EFC000;
   // height: 2.3em;
   padding: 0.8em;
   margin: 0em;
   border: none;
   cursor: pointer;

`

const Design = styled.div`
   width: 16px;
   height: 16px;
   flex-shrink: 0;
   background: #000;
`
const DesignWrapper = styled.div`
   width: 24px;
   height: 24px;
   flex-shrink: 0;
   border: 1px solid #D9D9D9;
   display: flex;
   justify-content: center;
   align-items: center;
`

const AddSection = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // new state variable
 
    const handleInputChange = (event) => {
     const newValue = event.target.value;
     setInputValue(newValue);
     if (newValue.length > 0) {
       setIsSaveButtonEnabled(true);
     } else {
       setIsSaveButtonEnabled(false);
     }
   };
 
   const handleCancelButtonClick = () => {
     setIsVisible(false); // hide the InputSection when Cancel button is clicked
     setInputValue('');
     setIsSaveButtonEnabled(false)
   };

    const handleAddButtonClick = () => {
        setIsVisible(true);
      };


    return(
        <>
        <TitleWrapper>
            <div>
                <H1>{ props.title }</H1>
                <p>You have 0 { props.title }</p>
            </div>
            <div>
                <Button onClick={handleAddButtonClick}>Add { props.title }</Button>
                
            </div>
        </TitleWrapper>

       <InputWrapper style={{ display: isVisible ? 'flex' : 'none' }}>
         <InputDiv>
            <DesignWrapper>
                <Design></Design>
            </DesignWrapper>
            <Input type="text" placeholder="Enter text here" value={inputValue} onChange={handleInputChange}/>
            <SaveButton enabled={isSaveButtonEnabled}>Save</SaveButton>
            <CancelButton onClick={handleCancelButtonClick}>Cancel</CancelButton>
         </InputDiv>
        </InputWrapper>

       </>
      )
}

export default AddSection;