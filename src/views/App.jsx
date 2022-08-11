import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { data, DataContext } from '../data/DataContext'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {

    const [state, setState] = useState(data)

    return (
        <div className="App">
            <DataContext.Provider value={{state, setState}}>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </DataContext.Provider>
        </div>
    )
}

export default App