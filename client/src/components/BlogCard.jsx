import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;

  return (
    <Link to={`/blog/${_id}`}>
      <div className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary-300 duration-300 cursor-pointer">
        <img src={image} alt="" className="aspect-video" />
        <span className="ml-3 mt-2 px-2 py-0.6 inline-block bg-indigo-500 rounded-full">
          {category}
        </span>
        <h5 className="mb-2 ml-2 font-medium text-gray-900">{title}</h5>
        <p
          className="mb-3 ml-2 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </Link>
  );
}
