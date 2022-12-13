import BlockTitle from "../../components/block-title";
import { useState } from "react";
import { updateUser, getUser } from "../../lib/helper";
import { useReducer } from "react";
import SwitchLabels from "../../components/switch";
import Snackbar from "@mui/material/Snackbar";
import AppLayout from "../../components/AppLayout/AppLayout";

export default function AddUser(props) {
  const { user } = props;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<boolean>(true);
  const vertical = "top",
    horizontal = "center";

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length >= 0) {

      let { firstname, lastname } = formData;
      const first = firstname ? firstname : user?.name.split(" ")[0];
      const second = lastname ? lastname : user?.name.split(" ")[1];
      const status =
        active?.toString() === user?.status ? user?.status : active.toString();
      

      updateUser(user?._id, {
        ...formData,
        name: `${first} ${second}`,
        status: status,
      })
        .then(() => setOpen(true))
        .catch();
    }
  };

  return (
    <AppLayout>
      <div className="webkitCenter">
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Update Employee Successfully"
          key={vertical + horizontal}
          autoHideDuration={2000}
        />
        <BlockTitle title="Update Employee " />
        <form className=" gap-4" onSubmit={handleSubmit}>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="firstname"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder={user?.name?.split(" ")[0]}
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="lastname"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder={user?.name?.split(" ")[1]}
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="email"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder={user?.email}
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="salary"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder={user?.salary}
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="date"
              name="date"
              onChange={setFormData}
              className="border px-5 py-3 focus:outline-none rounded-md"
              //  placeholder={moment(user?.date).format("YYYY-MM-DD hh:mm a")}
            />
          </div>

          <div className="input-type w-fit pb-4">
            <SwitchLabels
              color="success"
              label="is Active"
              onHandleSwitch={(value) => setActive(value)}
              checked={user?.status}
            />
          </div>

          <button
            style={{ width: "17%" }}
            className="flex justify-center text-md  bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
          >
            Update
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { userId } = query;
  let data;
  await getUser(userId)
    .then((res) => {
      data = res;
    })
    .catch((e) => (data = e));

  return {
    props: {
      // userId,
      user: JSON.parse(JSON.stringify(data)),
    },
  };
}
