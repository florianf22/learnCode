const Tag = ({ className, tagName, ...props }) => {
  return (
    <button
      {...props}
      className={`border border-black py-2.5 px-6 rounded-3xl text-sm
        ${className}`}
    >
      #{tagName.toLowerCase().replace(/\s/g, '')}
    </button>
  );
};

export default Tag;
