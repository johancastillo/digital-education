import { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
	const [filter, setFilter] = useState(false)
	const [searching, setSearching] = useState('')
	const [cartProducts, setCartProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [favoritesList, setFavoritesList] = useState([])

	return (
		<AppContext.Provider value={{ favoritesList, setFavoritesList, cartProducts, setCartProducts, loading, setLoading, filter, setFilter, searching, setSearching }}>
			{children}
		</AppContext.Provider>
	);
}


export default AppProvider