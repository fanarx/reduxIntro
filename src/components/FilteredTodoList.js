import TodoList from './TodoList';
import { toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';
import { getVisibleTodos } from '../reducers';



// const mapStateToProps = (state) => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// });

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state, ownProps.filter)
});

// const mapDispatchToProps = (dispatch) =>({
//     onTodoClick(id) { 
//         dispatch(toggleTodo(id)) 
//     }
// });

const FilteredTodoList = connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList);

// class FilteredTodoList extends Component {
//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe(() => this.forceUpdate());
//     }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     render() {
//         const props = this.props;
//         const { store } = this.context;
//         const state = store.getState();

//         return (
//             <TodoList
//                     todos={getVisibleTodos(state.todos, state.visibilityFilter)}
//                     onTodoClick={ id =>
//                             store.dispatch({
//                                 type: 'TOGGLE_TODO',
//                                 id
//                             })
//                     }
//             />
//         );
//     }
// } 

// FilteredTodoList.contextTypes = {
//     store: React.PropTypes.object
// };

export default FilteredTodoList;