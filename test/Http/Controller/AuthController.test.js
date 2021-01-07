import * as request from 'supertest'
import {app} from '../../../app'

jest.mock('../../../src/Application/use_cases/User/GetAccessToken')

describe('confirmAuthentication', () => {
    test('should resolve when credentials are ok', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'test12@test.com',
                password: 'password'
            })
        expect(res.statusCode).toEqual(200)    
    })

    test('should reject when credentials unmatched', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'test12@test.com',
                password: 'wrong-password'
            })
        expect(res.statusCode).toEqual(404) 
    })
})