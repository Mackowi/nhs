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
    <div className='mx-4'>
      <div className='flex flex-wrap gap-2 cursor-pointer items-center text-blue font-bold justify-center'>
        {tags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag)
          const tagClassNames = `border-2 font-bold px-2 rounded-xl ${
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
