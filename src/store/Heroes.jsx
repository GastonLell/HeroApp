import {createContext, useState} from 'react';

export const HeroesContext = createContext()

const Heroes = ({children}) => {

    const [heroes, setHeroes] = useState([])

    return(
        <HeroesContext.Provider value={[heroes, setHeroes]}>
            {children}
        </HeroesContext.Provider>
    )
}
export default Heroes;