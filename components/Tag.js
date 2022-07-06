const Tag = ({
  className,
  tagName,
  toggleSelectedTags,
  checkIfTagIsSelected,
  ...props
}) => {
  const isSelected = checkIfTagIsSelected(tagName);

  return (
    <button
      {...props}
      className={`border border-black py-2.5 px-6 rounded-3xl text-sm
         ${isSelected && 'bg-text text-bg'}  ${className}`}
      onClick={() => toggleSelectedTags(tagName)}
    >
      #{tagName.toLowerCase().replace(/\s/g, '')}
    </button>
  );
};

export default Tag;
