import Todo from '../../../src/Domain/Todo/Todo'
import TodoRepository from '../../../src/Domain/Todo/TodoRepository'
const mockTodoRepository = new TodoRepository()
import {CreateTodo} from '../../../src/Application/use_cases/Todo/CreateTodo'

test('should resolve with the newly persisted Task (augmented with an ID)', async () => {
  
  const persistedTodo = new Todo('Test title', 'Some test description', 'john doe', 'Done')
  mockTodoRepository.create = jest.fn(() => persistedTodo)

  const todo = await CreateTodo('Test title', 'Some test description', 'john doe', 'Done', { repository: mockTodoRepository })

  expect(mockTodoRepository.create).toHaveBeenCalledWith(new Todo(null, 'Test title', 'Some test description', 'john doe', 'Done'))
  expect(todo).toEqual(persistedTodo)
})