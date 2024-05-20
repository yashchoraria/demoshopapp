import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
    <div>
        <Item brand="Nirma"></Item>
        <ItemDate date="20" month="January" year="1991"></ItemDate>

        <Item brand="SurfExcel"></Item>
        <ItemDate date="21" month="February" year="1992"></ItemDate>

        <Item brand="555"></Item>
        <ItemDate date="22" month="March" year="1993"></ItemDate> 
        <div className="App">Hello Ji</div>
    </div>
  );
}

export default App;
 