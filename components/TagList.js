import Tag from './Tag';

const tags = [
  'Technology',
  'Open Source',
  'JavaScript',
  'Minimalism',
  'Self-help',
  'Animals',
  'Herbivores',
  'HTML',
  'CSS',
  'PHP',
  'Web Technologies',
  'Career',
  'Life',
  'Spirituality',
  'Food',
  'Cooking',
  'Sports',
  'Racing',
  'Mountain Hiking',
  'Cruising',
];

const TagsList = ({ className, ...props }) => {
  return (
    <div
      className="mt-20 w-full grid gap-y-6 gap-x-2 px-6"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      }}
    >
      {tags.map(tag => (
        <Tag key={tag} tagName={tag} />
      ))}
    </div>
  );
};

export default TagsList;
