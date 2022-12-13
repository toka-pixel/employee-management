type IProps = {
  title: string;
};
const BlockTitle = (props: IProps) => {
  const { title } = props;

  return (
    <h1 className="text-xl md:text-5xl text-center font-bold py-10">{title}</h1>
  );
};

export default BlockTitle;
