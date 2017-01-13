var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');




describe ('Reducers' ,() =>{
  describe('searchTextReducer',() =>{
    it('should set searchText', () =>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText :'dog'
      };
      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer' ,() => {
    it('showCompleted status get flipped', () =>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type:'ADD_TODO',
        text:'Walk the dog'
      };
      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle todo and change completedat', () => {
      var todos = [{
          id :'1',
          text : 'text',
          completed :true,
          createdAt:12,
          completedAt:123
        }];
      var action = {
        type:'TOGGLE_TODO',
        id:'1'
      };
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
