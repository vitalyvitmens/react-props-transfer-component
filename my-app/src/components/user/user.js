import { Contacts } from '../contacts/contacts'
import { Label } from '../label/label'
import styles from './user.module.css'

export const User = ({ name, age, ...contacts }) => {
	return (
		<div className={styles.user}>
			<br />
			<Label title={'Пользователь'} color={'blue'}/>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<Contacts {...contacts} />
		</div>
	)
}
