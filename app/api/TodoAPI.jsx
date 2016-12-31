var $ = require('jquery');

module.exports ={
  setTodos : function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos : function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    } catch(e){

    }
    return $.isArray(todos)? todos : [];
  },
  filterTodos : function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    //Filter by showCOmpleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });
    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) >-1;

    });

    //return -1 a come before b
    //return 1  b come before a
    //return 0 nothing happen
    //Sort todos with non-completed first
    //used the build in sort function
    filteredTodos.sort((a,b) =>{
      if(!a.completed && b.completed){
        return -1
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0;
      }
    });
    return filteredTodos;
  }
};
