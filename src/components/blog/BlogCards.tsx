interface BlogCardProps {
  title: string;
  category: string;
  author: string;
  date: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

const BlogCard = ({
  title,
  category,
  author,
  date,
  description,
  imageUrl,
  onClick,
}: BlogCardProps) => {
  return (
    <div
      className="flex flex-col w-full max-w-sm bg-white border border-gray-300 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105"
      onClick={onClick}
    >
      {/* Blog Image */}
      <div className="h-[294px] w-full bg-gray-200 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-glam-medium to-glam-tan flex items-center justify-center">
            <span className="text-white text-lg font-semibold opacity-70">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 pb-8">
        {/* Title */}
        <h3 className="font-open-sans font-bold text-xl text-gray-900 leading-[140%]">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="font-open-sans font-semibold text-xs tracking-[0.8px] uppercase">
            {category}
          </span>
          <div className="w-px h-4 bg-gray-600"></div>
          <span className="font-open-sans font-semibold text-xs tracking-[0.8px]">
            {author}
          </span>
          <div className="w-px h-4 bg-beauty-gray-light"></div>
          <span className="font-open-sans font-semibold text-xs tracking-[0.8px]">
            {date}
          </span>
        </div>

        {/* Description */}
        <p className="font-open-sans text-base text-gray-900 leading-[180%] capitalize line-clamp-3 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
