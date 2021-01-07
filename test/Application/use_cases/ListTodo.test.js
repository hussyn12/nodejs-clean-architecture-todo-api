import TodoRepository from '../../../src/Domain/Todo/TodoRepository'
import {ListTodo} from '../../../src/Application/use_cases/Todo/ListTodo'

const mockRepository = new TodoRepository()

test('Resolve with all the task present in the repository', async () => {
    mockRepository.list = () => ['john', 'jane']
    const todos =  ListTodo({ repository: mockRepository })

    expect(todos).toEqual(['john', 'jane'])
})