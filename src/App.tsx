import styles from './App.module.css';
import TimerCard from './components/TimerCard';

function App() {
	return (
		<div className={styles.container}>
			<TimerCard />
		</div>
	);
}

export default App;
