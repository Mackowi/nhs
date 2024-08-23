type TagFiltersProps = {
  tags: string[]
  selectedTags: string[]
  handleTagSelect: (tag: string) => void
}

const TagFilters: React.FC<TagFiltersProps> = ({
  tags,
  selectedTags,
  handleTagSelect,
}) => {
  return (
    <div className='p-6'>
      <div className='flex gap-2 cursor-pointer items-center text-blue font-bold justify-center'>
        <p>Tags:</p>
        {tags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag)
          const tagClassNames = `border-4 font-bold p-2 px-4 rounded-xl ${
            isSelected
              ? 'bg-blue text-white border-blue'
              : 'bg-white text-blue border-blue'
          }`

          return (
            <p
              className={tagClassNames}
              key={index}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default TagFilters
