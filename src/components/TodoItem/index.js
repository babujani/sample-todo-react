import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {item} = this.props
    const {title} = item
    return (
      <li>
        <div className="todoContainer">
          <p>{title}</p>
          <button type="button">Delete</button>
        </div>
      </li>
    )
  }
}
export default TodoItem
