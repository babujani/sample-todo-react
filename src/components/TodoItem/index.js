import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {title} = this.item
    return (
      <li>
        <div className="todoContainer">
          <p>{title}</p>
          <button>Delete</button>
        </div>
      </li>
    )
  }
}
export default TodoItem
