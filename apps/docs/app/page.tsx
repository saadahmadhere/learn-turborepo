import { Button } from '@repo/ui/button';
import Admin from '@repo/ui/admin';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<Button appName='web'>Click me!</Button>
			<Admin />
		</div>
	);
}
