import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   height: 104px;
   border-radius: 9px;
   background: #FFF;
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
   height: 2.5em;
`
const SaveButton = styled.button`
   border-radius: 10px;
   background: rgba(162, 162, 162, 0.54);
   color: #fff;
   height: 36px;
   padding: 8px 25px;
   margin-left: 0em;
   border: none;
`
const CancelButton = styled.button`
   border-radius: 15px;
   background: transparent;
   color: #EFC000;
   height: 36px;
   padding: 8px 15px;
   margin: 0em;
   border: none;

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

const InputSection = () => {
    return(
        <Wrapper>
            <InputDiv>
               <DesignWrapper>
                   <Design></Design>
               </DesignWrapper>
               <Input></Input>
               <SaveButton>Save</SaveButton>
               <CancelButton>Cancel</CancelButton>
            </InputDiv>
        </Wrapper>

    );
}

export default InputSection;