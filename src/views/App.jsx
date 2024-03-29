import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { data, DataContext } from '../data/DataContext'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Store from '../data/Store'

const App = props => {

    const [state, setState] = useState(data)

    return (
        <div className="App">
            <Store>
                <DataContext.Provider value={{ state, setState }}>
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </DataContext.Provider>
            </Store>
        </div>
    )
}

export default App