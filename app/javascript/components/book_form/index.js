import React, { useState, useEffect } from 'react';
import Pluralize from 'pluralize';
import { useHistory } from 'react-router-dom';
import { CategoryService, BookService } from '../../services/index';
import './style.scss';

const BookForm = (props) => {
    let history = useHistory();
    const [Data, setData] = useState({
        name: "",
        author: "",
        edition: "",
        year: "",
        category_id: 1
    });
    const [Categories, setCategories] = useState([]);
    const [Errors, setErrors] = useState([]);

    async function fetchCategories(){
        const response = await CategoryService.index();
        setCategories(response.data['categories']);
    }

    async function handleSubmit(){
        const form = new FormData();
        const image = document.getElementById("image").files[0];
        form.append("name", Data.name);
        form.append("author", Data.author);
        form.append("edition", Data.edition);
        form.append("year", Data.year);
        form.append("category_id", Data.category_id);
        document.getElementById("image").files.length != 0 && form.append("image", image);
        let response;
        if (props.Edit)
            response = await BookService.update(form, props.book.id);
        else
            response = await BookService.create(form);
        if (response.data.status == "error")
            setErrors(response.data.message);
        else{
            if (props.Edit)
                window.location.href = `/books/${props.book.id}`;
            else
                window.location.href = `/books/${response.data.id}`;
        }
    }

    useEffect(()=>{
        fetchCategories();
    }, []);

    useEffect(()=>{
        if (props.book)
            setData({
                name: props.book.name,
                author: props.book.author,
                edition: props.book.edition,
                year: props.book.year,
                category_id: props.book.category_id
            });
    },[props.book])

    const categories_options = Categories.map((category, key) => {
        return(
            <option key={key} value={category.id}>{category.name}</option>
        )
    })

    const error_messages = Errors.map((error, key) => {
        return(
            <li key={key}>{error}</li>
        )
    })

    return(
        <div className="form">
            <form>
                <div className="image">
                    <div className="field">
                        <label style={{marginRight: "5px"}}>Foto do livro</label>
                        <input type="file" id="image" name="image"
                        onChange={() => {
                            var reader = new FileReader();

                            reader.onload = function (e) {
                                // get loaded data and render thumbnail.
                                document.getElementById("imageValue").src = e.target.result;
                                document.getElementById("preview").style.display = "inline";
                            };

                            // read the image file as a data URL.
                            reader.readAsDataURL(document.getElementById("image").files[0]);
                        }}/>
                    </div>
                    <div id="preview" style={{display: (props.book && props.book.image_url)? "":"none"}}>
                        {(props.book && props.book.image_url)? <img id="imageValue" src={props.book.image_url}/>:<img id="imageValue"/>}
                    </div>
                </div>
                <div className="content">
                    {Errors.length != 0 && <div className="error_explanation">
                        <h2 className="error">{Pluralize("Error", Errors.length, true)} prohibited this book from being saved:</h2>
                        <ul>
                            {error_messages}
                        </ul>
                    </div>}
                    <div className="field">
                        <label>Nome do livro</label><br/>
                        <input className="data" type="text" id="name" name="name" placeholder="Um Curso de Cálculo Vol.1" 
                        value={Data.name}
                        onChange={(event) => {
                            setData({
                                ...Data,
                                name: event.target.value
                            })
                        }}/>
                    </div>
                    <div className="field">
                        <label>Autores</label><br/>
                        <input className="data" type="text" id="author" name="author" placeholder="Guidorizzi, Hamilton Luiz"
                        value={Data.author}
                        onChange={(event) => {
                            setData({
                                ...Data,
                                author: event.target.value
                            })
                        }}/>
                    </div>
                    <div className="fields">
                        <div className="short-field">
                            <label>Edição</label><br/>
                            <input className="data" type="text" id="edition" name="edition" placeholder="6ºEdição"
                            value={Data.edition}
                            onChange={(event) => {
                                setData({
                                    ...Data,
                                    edition: event.target.value
                                })
                            }}/>
                        </div>
                        <div className="short-field">
                            <label>Ano de publicação</label><br/>
                            <input className="data" type="number" id="year" name="year" placeholder="2018"
                            value={Data.year}
                            onChange={(event) => {
                                setData({
                                    ...Data,
                                    year: event.target.value
                                })
                            }}/>
                        </div>
                    </div>
                    <div className="short-field">
                        <label>Categoria</label><br/>
                        <select name="category" id="category" value={Data.category_id}
                        onChange={(event) => {
                            setData({
                                ...Data,
                                category_id: event.target.value
                            })
                            console.log(event.target.value)
                        }}>
                            {categories_options}
                        </select>
                    </div>
                    <div className="actions">
                        <button type="button" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            </form>
            {props.Edit && <div className="links">
                    <a href={`/books/${props.book.id}`} >Ver Mais</a> |
                    <a onClick={history.goBack}>Voltar</a>
            </div>}
        </div>
    )
}

export default BookForm;