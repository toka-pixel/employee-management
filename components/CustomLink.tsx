import Link from "next/link";

type IProps = {
  href: string;
  title: string;
  icon?:any
};
const CustomLink = (props: IProps) => {
  const { href, title,icon } = props;
  return (
    <Link
      className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
      href={href}
    >
      {title}
      <label className="px-1" style={{ display: "inline-block" }}>
        {icon}
      </label>
    </Link>
  );
};

export default CustomLink;
