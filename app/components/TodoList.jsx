var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render : function () {
    var {todos} =this.props;
    var renderTodos = () =>{
      if(todos.length ===0 ){
        return(
          <p className="container__messgae"> Nothing To Do</p>
        )
      }
        return todos.map((todo)=>{
          return(
            //react need Key to distinguish different components
            //assigin key to with id
            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
