import React,{ Fragment, useState, useEffect } from 'react';
import { Section } from 'react-bulma-components';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import UserMenu from '../../components/userProfile_menu';
import Form from '../../components/forms';
import { UserService } from '../../services/index';


const CustomSection = styled(Section)`
    display: flex;
    min-height: 100%;
`

const EditScreen = () => {
    const [User, setUser] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    async function fetchUser(){
        const response = await UserService.index();
        setUser(response.data['user']);
        setLoaded(true)
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return(
        <Fragment>
            <NavBar />
            <CustomSection className="edit">
                <UserMenu edit={true} user={User}/>
                {Loaded && <Form prevInfo={User}/>}
            </CustomSection>
        </Fragment>
    )
}

export default EditScreen;