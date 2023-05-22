import { Label } from '../label/label'

export const Contacts = ({ email, phone }) => {
	return (
		<div>
			<Label title={'Контакты'} color={'green'}/>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	)
}
