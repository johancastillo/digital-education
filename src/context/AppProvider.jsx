import { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
	const [filter, setFilter] = useState(false)
	const [searching, setSearching] = useState('')

	return (
		<AppContext.Provider value={{ filter, searching, setSearching, setFilter }}>
			{children}
		</AppContext.Provider>
	);
}


export default AppProvider
