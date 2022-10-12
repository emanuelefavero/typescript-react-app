import { useState, useEffect } from 'react'

function Posts() {
  interface IPost {
    userId: number
    id: number
    title: string
    body: string
  }

  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setPosts(json)
        setLoading(false)
      })
  })

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </>
  )
}

export default Posts
