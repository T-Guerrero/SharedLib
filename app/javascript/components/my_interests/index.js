import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Notification, Heading, Container, Button, Section } from 'react-bulma-components';
import { DashboardService } from '../../services/index';
import Book from '../book_preview';

const MyInterests = () => {
    const [my_interests, setMyInterests] = useState([]);

    async function fetchMyInterests() {
        const response = await DashboardService.index();
        setMyInterests(response.data['my_interests']);
    }

    useEffect(() => {
        fetchMyInterests();
    }, []);

    const my_interests_components = my_interests.map((interest, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <Book name={interest.book.name} author={interest.book.author} borrowed={interest.book.borrowed} available={interest.book.available} image_url={interest.book.image_url} key={key} id={interest.book.id}/>
        </Columns.Column>
    );

    return (
        <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
            <Columns>
                <Columns.Column>
                    <Heading className='has-text-black' size={4}>
            	       Meus Interesses
                    </Heading>
                </Columns.Column>
            </Columns>
            <Columns className='is-mobile center2-mobile'>
                {my_interests_components}
    		</Columns>
        </div>
    );
};

export default MyInterests;
