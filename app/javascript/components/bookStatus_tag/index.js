import React, { Fragment } from 'react'
import { Tag } from 'react-bulma-components';

const BookStatus = (props) => {
    let BookStatusTag;

    //Estado do livro
    if (!props.available){
        BookStatusTag = <Tag className="is-light is-large"><p>Indisponível</p></Tag>
    }
    else if (props.borrowed){
        BookStatusTag = <Tag className="is-danger is-large"><p>Emprestado</p></Tag>
    }
    else if(props.inTransition){
        BookStatusTag = <Tag className="is-warning is-large"><p>Em transição</p></Tag>
    }
    else{
        BookStatusTag = <Tag className="is-success is-large"><p>Disponível</p></Tag>
    }

    return (
        <Fragment>
            {BookStatusTag}
        </Fragment>
    )
}

export default BookStatus;