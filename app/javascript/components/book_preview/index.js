import React, {Fragment} from 'react';
import { Heading, Image } from 'react-bulma-components';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const BookPreview = (props) => {
    let status;
    let statusStyle = {};

    if (props.borrowed) {
        status = "Emprestado";
        statusStyle.backgroundColor = "#F8502B";
    }
    else if (props.available) {
        status = "Disponível";
        statusStyle.backgroundColor = "#45D615";
    }
    else {
        status = "Em retorno";
        statusStyle.backgroundColor = "#F6F816";
    }

    return(
        <div className="box center2">
            <a href={`/books/${props.id}`}>
                <Heading size={6} className='has-text-black centered-text book-title'>{props.name}</Heading>
                <Heading size={6} className='has-text-black centered-text' subtitle>{props.author}</Heading>
            </a>
            <div style={{marginTop: 10}}>
                <a href={`/books/${props.id}`}>
                    <div className="book-img-wrapper center">
                        <img src={props.image_url} style={{maxHeight: "100%", width: "auto"}}/>
                    </div>
                </a>
            </div>
            <div style={{marginTop: 20}}>
                <a href={`/books/${props.id}`}>
                    <div style={statusStyle} className="btn-bookStatus center">
                        <span>{status}</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default BookPreview;
