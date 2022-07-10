import Tag from './Tag';

const TagsList = ({
  className,
  toggleSelectedTags,
  checkIfTagIsSelected,
  tags,
  ...props
}) => {
  return (
    <div
      className="mt-20 w-full grid gap-y-6 gap-x-2 px-6"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      }}
    >
      {tags.map((tag, idx) => (
        <Tag
          key={tag.name}
          tagName={tag.name}
          idx={idx}
          tagDescription={tag.description}
          toggleSelectedTags={toggleSelectedTags}
          checkIfTagIsSelected={checkIfTagIsSelected}
        />
      ))}
    </div>
  );
};

export default TagsList;
