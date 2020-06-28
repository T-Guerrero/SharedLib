import React from 'react';
import { FaSearch } from 'react-icons/fa'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        const newUrl = `/search?query=${this.state.query}`;
        console.log(newUrl);
        window.location.href = newUrl;
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label style={{marginRight: 5}}>
                    <input
                        type="text"
                        placeholder="Busque um livro por seu título ou autor, ou uma categoria..."
                        value={this.state.query}
                        onChange={this.handleChange}
                        style={{backgroundColor: "#FFDC75", borderRadius: 25}}
                    />
                </label>
                <button style={{backgroundColor: "#FFDC75", borderRadius: 20}}>
                    <FaSearch className="is-small" style={{color: "#FFA500"}}/>
                </button>
            </form>
        );
    }
}

export default SearchBar;
