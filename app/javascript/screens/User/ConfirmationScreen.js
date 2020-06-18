import React, { Fragment } from 'react';
import { Section } from 'react-bulma-components';
import NavBar from '../../components/navbar';
import UserMenu from '../../components/userMenu';
import styled from 'styled-components';

const CustomSection = styled(Section)`
    display: flex;
    min-height: 100%;
`

const ConfirmationUser = () => {
    return (
        <Fragment>
            <NavBar/>
            <CustomSection>
                <UserMenu confirmations={true}/>
            </CustomSection>
        </Fragment>
    )
}

export default ConfirmationUser;