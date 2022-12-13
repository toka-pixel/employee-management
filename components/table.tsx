import { BiEdit, BiTrashAlt, BiWindowClose } from "react-icons/bi";
import { User } from "../types/user";
import Image from 'next/image';
import { AiFillCloseSquare } from "react-icons/ai";

type IProps = {
  users: User[];
  update?: Function;
  deleteOneUser?: Function;
};

export default function Table(props: IProps) {
  const { users, update, deleteOneUser } = props;

  const Tr = ({ _id, name, avatar, email, salary, date, status }) => {
    return (
      <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex flex-row items-center">
          <img
            src={avatar || "#"}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-center ml-2 font-semibold">
            {name || "Unknown"}
          </span>
        </td>
        <td className="px-16 py-2">
          <span>{email || "-"}</span>
        </td>
        <td className="px-16 py-2">
          <span>{salary || "-"}</span>
        </td>
        <td className="px-16 py-2">
          <span>{date || "-"}</span>
        </td>
        <td className="px-16 py-2">
          <button>
            <span
              className={`${
                status === "true" ? "bg-green-500" : "bg-rose-500"
              } text-white px-5 py-1 rounded-full`}
            >
              {status === "true" ? "Yes" : "No"}
            </span>
          </button>
        </td>

        <td className="px-16 py-2 flex justify-around gap-5">
          <button className="cursor">
            <BiEdit
              size={25}
              onClick={() => update(_id)}
              color={"rgb(34,197,94)"}
            ></BiEdit>
          </button>
          <button className="cursor">
            <BiTrashAlt
              size={25}
              onClick={() => deleteOneUser(_id)}
              color={"rgb(244,63,94)"}
            ></BiTrashAlt>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table className="min-w-full table-auto overflow-auto'">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Active</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {users.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}
