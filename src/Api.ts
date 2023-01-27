import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export namespace Api {
    export interface Post {
        id: string
        title: string
        authorId: string
    }

    export interface User {
        id: string
        name: string
    }

    export function defineMocks() {
        const mock = new MockAdapter(axios)

        mock.onGet('/api/posts').reply(200, [{ id: 1, title: 'mein post' }])
        mock
            .onGet('/api/posts/123')
            .reply(200, { id: 123, title: 'der post 123', authorId: 'aaaa' })
        mock.onGet('/api/users/aaaa').reply(200, { id: 'aaaa', name: 'jochen' })
        mock.onGet('/api/users').reply(200, [{ id: 'aaaa', name: 'jochen' }])
    }

    export async function getAllUsers() {
        return (await axios.get('/api/users')).data
    }

    export async function getUserById(id: string) {
        return (await axios.get(`/api/users/${id}`)).data
    }

    export async function getAllPosts() {
        return (await axios.get('/api/posts')).data
    }

    export async function getPostById(id: string) {
        return (await axios.get(`/api/posts/${id}`)).data
    }
}
