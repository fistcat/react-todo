var redux = require('redux');
var {searchTextReducer,showCompletedReducer,todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText : searchTextReducer,
    showCompleted : showCompletedReducer,
    todo : todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolExtension ? window.devToolExtension () : f => f
  ));

  return store;
};
