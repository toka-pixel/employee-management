import BlockTitle from "../components/block-title";
import Link from "next/link";
import CustomLink from "../components/CustomLink";
import ButtonSubmit from "../components/ButtonSubmit";
import GetAllUsers from "./getAllUsers";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import AppLayout from "../components/AppLayout/AppLayout";

const HomeContent = (props) => {
  return (
    <AppLayout>
      <BlockTitle title="Employee Management" />

      <div className=" max-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <CustomLink
            href="/users/addUser"
            title="Add Employee"
            icon={<AiOutlineUsergroupAdd size={25} />}
          />
        </div>
      </div>
      <br />
      <div className="overflow-auto mx-auto">
        <GetAllUsers />
      </div>
    </AppLayout>
  );
};

export default HomeContent;
