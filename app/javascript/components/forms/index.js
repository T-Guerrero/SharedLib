import React, { useState } from 'react';
import Pluralize from 'pluralize';
import { DeviseService } from '../../services/index';
import './style.scss';

const Form = (props) => {
    const [Data, setData] = useState({
        name: props.prevInfo.name,
        email: props.prevInfo.email,
        password: "",
        password_confirmation: "",
        phone: props.prevInfo.phone,
        nusp: props.prevInfo.nusp,
        current_password: ""
    });
    const [Errors, setErrors] = useState([]);

    async function cancelAccount(){
        const response = await DeviseService.cancelAccount();
        window.location.href = response.data.message;
    }

    async function handleSubmit(){
        const form = new FormData();
        const image = document.getElementById("photo").files[0]
        form.append("name", Data.name);
        form.append("email", Data.email);
        form.append("password", Data.password);
        form.append("password_confirmation", Data.password_confirmation);
        form.append("phone", Data.phone);
        document.getElementById("photo").files.length != 0 && form.append("photo", image);
        form.append("current_password", Data.current_password);
        const response = await DeviseService.update(form);
        if (response.data.status == "success"){
            window.location.href = response.data.message;
        }
        else
            setErrors(response.data.message)
        console.log(response.data)
        console.log(typeof response.data.message)
    }

    const error_messages = Errors.map((error, key) => {
        return (<li key={key}>{error}</li>)
    })

    return(
        <div className="form">
            <h2>Editar Dados</h2>
            {Errors.length != 0 && <div className="error_explanation">
                <h2 className="error">{Pluralize("Error", Errors.length, true)} prohibited this user from being saved:</h2>
                <ul>
                    {error_messages}
                </ul>
            </div>}
            <form>
                <div className="field">
                    <label>Nome</label><br/>
                    <input className="data" type="text" id="name" name="name" value={Data.name}
                    onChange={(event) => {
                        setData({
                            ...Data,
                            name: event.target.value
                        })
                    }}/>
                </div>
                <div className="field">
                    <label>Email</label><br/>
                    <input className="data" type="email" id="email" name="email" value={Data.email}
                    onChange={(event) => {
                        setData({
                            ...Data,
                            email: event.target.value
                        })
                    }}/>
                </div>
                <div className="field">
                    <label>Senha</label><br/>
                    <input className="data" type="password" id="password" name="password"
                    onChange={(event) => {
                        setData({
                            ...Data,
                            password: event.target.value
                        })
                    }}/>
                </div>
                <div className="field">
                    <label>Confirmação de senha</label><br/>
                    <input className="data" type="password" id="password_confirmation" name="password_confirmation"
                    onChange={(event) => {
                        setData({
                            ...Data,
                            password_confirmation: event.target.value
                        })
                    }}/>
                </div>
                <div className="fields">
                    <div className="short-field">
                        <label>Celular</label><br/>
                        <input className="data" type="text" id="phone" name="phone" value={Data.phone}
                        onChange={(event) => {
                            setData({
                                ...Data,
                                phone: event.target.value
                            })
                        }}/>
                    </div>
                    <div className="short-field">
                        <label>NUSP</label><br/>
                        <input className="data" type="text" id="nusp" name="nusp" value={Data.nusp}
                        onChange={(event) => {
                            setData({
                                ...Data,
                                nusp: event.target.value
                            })
                        }}/>
                    </div>
                </div>
                <div className="field">
                    <label style={{marginRight: "5px"}}>Foto</label>
                    <input type="file" id="photo" name="photo"/>
                </div>
                <div className="last-field short-field">
                    <label>Senha atual</label><br/>
                    <input className="data" type="password" id="current_password" name="current_password"
                    onChange={(event) => {
                        setData({
                            ...Data,
                            current_password: event.target.value
                        })
                    }}/>
                </div>
            </form>
            <div className="actions">
                <button onClick={handleSubmit}>Atualizar</button>
            </div>
            <div className="options">
                <p>Infeliz?</p>
                <div className="links">
                    <a onClick={() => {if (window.confirm('Você tem certeza?')) cancelAccount()}}>Cancelar minha conta</a>
                </div>
            </div>
        </div>
    )
}

export default Form;