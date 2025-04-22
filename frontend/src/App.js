import './App.css';

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Welcome to Prescripto</h1>
            <p>This is your React frontend.</p>
            <MyButton />
        </div>
    );
}

export default App;
