import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    // this method is used to pass a value from this child component to the parent component which is App
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/* the following inline call back message is an arrow message, which means, it solves the problem of this ("you cannot call a method on undefined") */}
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;