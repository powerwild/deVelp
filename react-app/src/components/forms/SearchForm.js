import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const SearchForm = () => {
    const [ params, setParams ] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.length > 0) {
            history.push(`/search/${params}`)
            setParams('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type='search' name='search' value={params} placeholder='City, State or State' onChange={(e) => setParams(e.target.value)}/>
        </form>
    )
}


export default SearchForm;
