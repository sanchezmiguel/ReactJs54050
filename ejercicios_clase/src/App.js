import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting='Bienvenido/a a nuestra tienda de tecnología de última generación' />
        </div>
    );
}

export default App;
