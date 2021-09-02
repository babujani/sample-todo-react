import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  deleteATodo = () => {
    const {deleteTodo, item} = this.props
    const {id} = item
    deleteTodo(id)
  }

  render() {
    const {item} = this.props
    const {title} = item
    return (
      <li className="todoContainer">
        <p>{title}</p>
        <button type="button" onClick={this.deleteATodo}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
