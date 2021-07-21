import Project from '../project';

describe('Project model test', () => {
  it('Project class accept one argument [String]', () => {
    const newProject = new Project('welcome');
    expect(newProject.name).toBe('welcome');
  });

  it('When created without pass arguments, title should be undefine', () => {
    const newProject = new Project();
    expect(newProject.name).toBeUndefined();
  });
});