
type IProps ={
  icon?:any,
  title:string
}
const ButtonSubmit = (props:IProps) => {
  const { icon , title } = props;
  return (
    <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800">
      {title}
      <label className="px-1" style={{display:'inline-block'}}>
        {icon}
      </label>
    </button>
  );
};

export default ButtonSubmit;
