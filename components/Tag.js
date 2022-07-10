const Tag = ({
  className,
  tagName,
  tagDescription,
  idx,
  toggleSelectedTags,
  checkIfTagIsSelected,
  ...props
}) => {
  const isSelected = checkIfTagIsSelected(tagName);

  return (
    <button
      {...props}
      // prettier-ignore
      className={`border border-black py-2.5 px-6 rounded-3xl text-sm relative
         ${isSelected && 'bg-text text-bg' } hover:after:content-[attr(after)] 
         after:absolute after:bg-accent after:text-white after:w-[40ch]
         after:z-10 after:p-3 after:content-none after:cursor-text
         after:rounded-md after:shadow-sm after:left-[-30%] after:top-[120%] ${className}`}
      onClick={() => toggleSelectedTags(tagName)}
      after={tagDescription}
    >
      #{tagName.toLowerCase().replace(/\s/g, '')}
    </button>
  );
};

export default Tag;
