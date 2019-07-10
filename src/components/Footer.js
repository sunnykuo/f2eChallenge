import React from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/constants'

const Footer = () => (
	<div>
		<span>Show: </span>
		<FilterLink filter={SHOW_ALL}>All</FilterLink>
		<FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
		<FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
	</div>
)

export default Footer