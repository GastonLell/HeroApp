import {createContext, useState} from 'react';

export const TeamContext = createContext();

const HeroTeam = ({children}) => {
    const [team, setTeam] = useState([])

    return(
        <TeamContext.Provider value={[team, setTeam]}>
            {children}
        </TeamContext.Provider>
    )
}
export default HeroTeam;