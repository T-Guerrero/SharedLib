import React, {Fragment} from 'react';
import { Heading, Image } from 'react-bulma-components';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const DivVSpaced = styled.div`
  margin-top: 10px;
`

const Book = (props) => {
  return(
    <Link to={`/books/${props.id}`}>
        <Image src={props.image_url}/>
        <DivVSpaced>
            <Heading size={6} className='has-text-black'>{props.name}</Heading>
            <Heading size={6} className='has-text-black' subtitle>{props.author}</Heading>
        </DivVSpaced>
    </Link>
  );
}
export default Book;
