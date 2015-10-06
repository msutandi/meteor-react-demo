// tests/jasmine/client/integration/simple-todos-reactSpec.js

describe("simple-todos-react", function(){
  describe("head", function(){
    it("shows 'Todo List' title", function(){
      expect($('title').text()).toEqual('Todo List');
    });
  });
});