import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
    return (
        <>
            <Navbar title="TextUtils" />
            <Textform heading=" Enter the text here" />
        </>
    );
}

export default App;