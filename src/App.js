import React from 'react';

//component imports
import Header from './components/Header'
import Showcase from './components/Showcase'
import ArticleGrid from './components/ArticleGrid'
import Footer from './components/Footer'

import './styles/substance.css';
import './styles/cool.css';
import './styles/footer.css';
import './styles/index.css';
import './styles/kgaming.css';

function App() {
    return (
        <div className="container">
            <Header/>
            <Showcase/>
            <ArticleGrid/>
            <Footer/>
        </div>
    )
};

export default App;