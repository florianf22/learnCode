const AuthorInfo = ({ showAuthor, author, authorJobTitle }) => {
  if (!AuthorInfo) return null;

  if (showAuthor === 'name') {
    return (
      <div className="flex-1">
        <h3 className="font-bold text-sm font-tinos">{author}</h3>
        <p className="text-sm font-poppins">{authorJobTitle}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[150px]">
      <p className="font-semibold text-sm">{author}</p>
      <p className="text-xs">
        {authorJobTitle.length > 20
          ? authorJobTitle.substring(0, 20) + '...'
          : authorJobTitle}
      </p>
    </div>
  );
};

export default AuthorInfo;
