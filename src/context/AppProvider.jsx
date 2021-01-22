import { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
	const [filter, setFilter] = useState(false)
	const [searching, setSearching] = useState('')
	const [cartProducts, setCartProducts] = useState([])

	return (
		<AppContext.Provider value={{ filter, setFilter, searching, setSearching, cartProducts, setCartProducts }}>
			{children}
		</AppContext.Provider>
	);
}


export default AppProvider
