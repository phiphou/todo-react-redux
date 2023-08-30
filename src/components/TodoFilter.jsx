import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_UNCOMPLETED,
  updateFilter
} from '../redux'

const TodoFilter = () => {
  const [filter, setFilter] = useState(FILTER_ALL)
  const dispatch = useDispatch()
  const onChangeValue = (event) => {
    setFilter(event.target.value)
    dispatch(updateFilter(event.target.value))
  }

  return (
    <div className="filter">
      <div onChange={onChangeValue}>
        <input
          type="radio"
          value={FILTER_ALL}
          name="filter"
          defaultChecked={filter === FILTER_ALL}
        />{' '}
        All
        <input type="radio" value={FILTER_COMPLETED} name="filter" /> Completed
        <input type="radio" value={FILTER_UNCOMPLETED} name="filter" />{' '}
        Uncompleted
      </div>
    </div>
  )
}

export default TodoFilter
