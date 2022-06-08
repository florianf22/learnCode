import Image from 'next/image';

const Input = ({
  className,
  icon,
  onIconClick,
  inputStyles,
  placeholder = 'Find the topics you care about',
  ...props
}) => {
  return (
    <div className={`min-w-[50%] relative max-w-xl ${className}`}>
      <input
        {...props}
        placeholder={placeholder}
        className={`border border-black w-full pr-8 pl-6 py-4 rounded-3xl
        focus:outline-none bg-transparent ${inputStyles}`}
      />
      {icon && (
        <div
          className="absolute top-[50%] translate-y-[-14px] right-4 cursor-pointer"
          onClick={onIconClick}
        >
          <Image
            src={`/icons/${icon}.svg`}
            width={28}
            height={28}
            alt={`${icon} icon`}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
