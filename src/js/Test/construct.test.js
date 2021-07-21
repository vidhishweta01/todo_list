import { newProject, newTask } from  '../construc';

describe('creating a new project with project modal', () => {
    test('create new project passing in project name', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(newProject('Shaurya')).toBeTruthy();
    });
});

describe('Create to do and append to local storage', () => {
    test('new todo saved to browser', () => {
      const newTestTodo = newTask(
        'title',
        'description',
        'dueDate',
        'Shaurya',
      );
      expect(newTestTodo).toBeTruthy();
    });
  });