import React from 'react'
import { Api } from './Api'
import { useQuery } from 'react-query'

function App() {
    const postId = '123'
    const { data: post } = useQuery<Api.Post>(['post', postId], () =>
        Api.getPostById(postId)
    )
    const { data: user } = useQuery<Api.User>(
        ['user', post?.authorId],
        () => Api.getUserById(post?.authorId || ''),
        { enabled: !!post?.id }
    )

    console.log(postId, post, user)

    return (
        <div>
            <h2 className="text-xl">Hallo aus der App</h2>
            <button
                type="button"
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Click here
            </button>
        </div>
    )
}

export default App
