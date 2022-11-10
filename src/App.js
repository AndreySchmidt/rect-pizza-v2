// import logo from './logo.svg';
// import './App.css';clipW
import './scss/style.scss';

import {Header} from './components/Header';
import {Categories} from './components/Categories';
import {Pizza} from './components/Pizza';
import {Sort} from './components/Sort';

function App() {
  return (
     <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Пиццы</h2>
          <div className="content__items">
           <Pizza title="Чизбургер-пицца" price="54" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
