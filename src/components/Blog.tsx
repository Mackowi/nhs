import { useState } from 'react'
import TagFilters from './TagFilters'

type IndexBlogProps = {
  posts: object[]
  currentLocale: any
}

const IndexBlog: React.FC<IndexBlogProps> = ({ posts, currentLocale }) => {
  const [selectedTags, setSelectedTags] = useState([])
  const tagCount: Record<string, number> = {}

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prevTags: any) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag)
      }
      return [...prevTags, tag]
    })
  }

  posts.forEach((post: any) => {
    const tags = post.data.tags || []
    tags.forEach((tag: never) => {
      if (tagCount[tag]) {
        tagCount[tag] += 1
      } else {
        tagCount[tag] = 1
      }
    })
  })

  // console.log('Selected Tags:')
  // console.log(selectedTags)

  const filteredPosts =
    selectedTags.length === 0
      ? posts
      : posts.filter((post: any) => {
          const postTags = post.data.tags || []
          return postTags.some((tag: never) => selectedTags.includes(tag))
        })

  // console.log('filteredPosts:')
  // console.log(filteredPosts)

  return (
    <main className='container mx-auto mt-4'>
      <div>
        <TagFilters
          tags={Object.keys(tagCount)}
          selectedTags={selectedTags}
          handleTagSelect={handleTagSelect}
        />
      </div>
      <section className='p-8'>
        <ul className='flex flex-wrap gap-8 justify-center'>
          {filteredPosts.map((post: any, index) => (
            <li
              key={index}
              className='w-full md:w-[47%] text-center md:first:w-full md:first:mb-20 first:mb-8'
            >
              <a href={`/blog/${currentLocale}/${post.slug}/`}>
                <img
                  src={post.data.heroImage}
                  alt={`blog post${index}`}
                  className='rounded-xl h-[400px] md:h-[500px] w-full object-cover hover:shadow-2xl'
                />
                <h5 className='mt-4 title'>{post.data.title}</h5>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
export default IndexBlog