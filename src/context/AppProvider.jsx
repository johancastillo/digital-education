import { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
	const [filter, setFilter] = useState(false)
	const [searching, setSearching] = useState('')
	const [cartProducts, setCartProducts] = useState([])
	const [menu, setMenu] = useState('menu-hidden')
	const [loading, setLoading] = useState(true)

	return (
		<AppContext.Provider value={{ loading, setLoading, filter, setFilter, searching, setSearching, cartProducts, setCartProducts, menu, setMenu }}>
			{children}
		</AppContext.Provider>
	);
}


export default AppProvider
