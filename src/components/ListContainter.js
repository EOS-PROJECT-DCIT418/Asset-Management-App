import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
   margin: 2em 3.5em;
   background: #fff;
   border-radius: 9px;
   padding: 1em;
   
`

const Ul = styled.ul`
   list-style-type: square;
   
   li::marker{
      border-radius: 5px;
      color: #EFC000; 
      width: 16px;
   }
`

const ListContainer = (props) => {
    return(
        <ListWrapper>
            <center><p><i>No { props.title } Added</i></p></center>
            <Ul>
            </Ul>
        </ListWrapper>

    );
}


export default ListContainer;