import Task from '../todo';

describe('Task class constructor ', () => {
  test('constructor to accept 3 arguments, keys including[name, decription, dueDate]', () => {
    const newTodo = new Task(
      'name',
      'description',
      'dueDate',
    );
    expect(newTodo).toEqual(expect.objectContaining({ name: 'name' }));
  });

  test('fail when initializing with an undefine key', () => {
    const newTodo = new Task(
      'name',
      'description',
      'dueDate',
    );
    expect(newTodo).toEqual(expect.not.objectContaining({ some: 'some' }));
  });
});