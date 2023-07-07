const expensesRoutes = require('../../routes/expenses');

const routes = {
  index:  { method: 'get',    path: '/',    expectedAction: 'index' },
  new:    { method: 'get',    path: '/new', expectedAction: 'newExpense' },
  show:   { method: 'get',    path: '/:id', expectedAction: 'show' },
  create: { method: 'post',   path: '/',    expectedAction: 'create' },
  delete: { method: 'delete', path: '/:id', expectedAction: 'deleteExpense' }
};

const getAction = (path, method) => {
  const layer = expensesRoutes.stack.find( layer =>
    layer.route.path == path && layer.route.methods[method]
  );
  return layer.route.stack[0].name;
};

describe('Expenses Routes', () => {

  it('should route the index action', () => {
    const { method, path, expectedAction } = routes['index'];
    expect(getAction(path, method)).toBe(expectedAction);
  });

  it('should route the new action', () => {
    const { method, path, expectedAction } = routes['new'];
    expect(getAction(path, method)).toBe(expectedAction);
  });

  it('should route the show action', () => {
    const { method, path, expectedAction } = routes['show'];
    expect(getAction(path, method)).toBe(expectedAction);
  });

  it('should route the create action', () => {
    const { method, path, expectedAction } = routes['create'];
    expect(getAction(path, method)).toBe(expectedAction);
  });

  it('should route the delete action', () => {
    const { method, path, expectedAction } = routes['delete'];
    expect(getAction(path, method)).toBe(expectedAction);
  });

});
