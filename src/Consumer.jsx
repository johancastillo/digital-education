import React from 'react'
import AppContext from './context/AppContext'

const Consumer = () => {
    const {filter, setFilter, searching, setSearching} = React.useContext(AppContext)

    const search = e => {
        setSearching(e.target.value)
    }

    return (
        <div style={{marginTop: '114px'}}>
            <input type="text" onChange={search} />
            <br/>
            Hello i am Consumer {searching}
        </div>
    )
}

export default Consumer