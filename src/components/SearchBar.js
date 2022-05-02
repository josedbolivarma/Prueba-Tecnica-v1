import React from 'react';
// Styles 
import './styles/SearchBar.css';


// Retorna un template
class SearchBar extends React.Component {
    //  

    onInputChange(e) {
        this.props.inputChange(e)
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.formSubmitted();
      
    }

    render() {
    const location = this.props.location;



        return (
            <div className='searchBar'>
            <form
            className='searchBar__form' 
            onSubmit={(e) => this.onFormSubmit(e)}>
                {location}
                <button 
                className='searchBar__button'
                type='submit'>
                    Search
                </button>
                
                <input 
                className='searchBar__input'
                id='search'
                name='search'
                value={location}
                onChange={e => this.onInputChange(e)}
                placeholder='Enter the city   '
                />
            </form>
        
        </div>
        )
    }
}

export default SearchBar;