var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render : function () {
    var {todos} =this.props;
    var renderTodos = () =>{
        return todos.map((todo)=>{
          return(
            //react need Key to distinguish different components
            //assigin key to with id
            <Todo key={todo.id} {...todo}/>
          );
        });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;