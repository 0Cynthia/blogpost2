import './index.css';
import SharkList from './components/SharkList';
import CreateSharkForm from './components/CreateSharkForm';

function App() {
	return (
		<div className="App">
			<CreateSharkForm/>
			<SharkList/>
		</div>
	);
}

export default App;