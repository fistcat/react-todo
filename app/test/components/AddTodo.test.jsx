var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');
describe('AddTodo',()=>{
  it('should exist', () =>{
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo when form Submit with string', () =>{
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.todoText.value = "Do testing";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith("Do testing");

  });
  it('should not call onAddTodo when form Submit empty', () =>{
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });
})
