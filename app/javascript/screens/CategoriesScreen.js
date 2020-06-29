import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Heading } from 'react-bulma-components';
import NavBar from '../components/navbar';
import { CategoryService } from '../services/index';


const CategoriesScreen = () => {
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        const response = await CategoryService.index();
        setCategories(response.data['categories']);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const categories_components = categories.map((category, key) =>
        <Columns.Column key={key} className="is-one-third-desktop is-four-fifths-mobile">
            <a href={`/categories/${category.id}/books`}>{category.name}</a>
        </Columns.Column>
    );

    return(
        <Fragment>
            <NavBar />
            <div style={{marginTop: 40, paddingLeft: 40, paddingRight: 40}}>
                <Columns>
                    <Columns.Column>
                        <Heading className='has-text-black' size={4}>
                        	Categorias
                        </Heading>
                    </Columns.Column>
                </Columns>
                <Columns className='is-mobile center2-mobile'>
                    {categories_components}
        		</Columns>
            </div>
        </Fragment>
    );
}
export default CategoriesScreen;
