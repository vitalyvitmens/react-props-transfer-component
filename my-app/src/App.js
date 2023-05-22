import { User, Label } from './components'
import styles from './app.module.css'

const getUserFromServer = () => ({
	name: 'Егор',
	age: 14,
	email: 'user@tut.by',
	phone: '+375296665544',
})

export const App = () => {
	const user = getUserFromServer()
	return (
		<div className={styles.app}>
			<br />
			<Label title={'Приложение'} color={'red'} />
			<div>Разная информация приложения</div>
			{/* <User
				name={user.name}
				age={user.age}
				email={user.email}
				phone={user.phone}
			/> */}
			<User {...user} />
		</div>
	)
}
