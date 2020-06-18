import React, { Fragment } from 'react';
import { Section } from 'react-bulma-components';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import UserMenu from '../../components/userMenu';

const CustomSection = styled(Section)`
    display: flex;
    min-height: 100%;
`

const UserEdit = () => {
    return (
        <Fragment>
            <NavBar/>
            <CustomSection>
                <UserMenu edit={true}/>
            </CustomSection>
        </Fragment>
    )
}

export default UserEdit;