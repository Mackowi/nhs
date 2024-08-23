interface TagCount {
  [tagName: string]: number
}

interface TagListProps {
  tagCount: TagCount
}

const TagList: React.FC<TagListProps> = ({ tagCount }) => {
  return (
    <div>
      {Object.keys(tagCount).map((tagName) => (
        <p key={tagName}>{tagName}</p>
      ))}
    </div>
  )
}

export default TagList
