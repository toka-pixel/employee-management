import { useState } from "react";
import BlockTitle from "../../components/block-title";
import { addUser } from "../../lib/helper";
import { useReducer } from "react";
import Snackbar from "@mui/material/Snackbar";
import SwitchLabels from "../../components/switch";
import AppLayout from "../../components/AppLayout/AppLayout";

export default function AddUser(props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);
  const vertical = "top",
    horizontal = "center";

  const handleClose = () => {
    setOpen(false);
  };

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length >= 0) {
      let { firstname, lastname } = formData;

      addUser({
        ...formData,
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
          Math.random() * 10
        )}.jpg`,
        name: `${firstname} ${lastname}`,
        status: active.toString(),
      })
        .then((res) => {
          setOpen(true);
        })
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
          message="Add Employee Successfully"
          key={vertical + horizontal}
          autoHideDuration={2000}
        />

        <BlockTitle title="Add Employee " />
        <form className="  gap-4" onSubmit={handleSubmit}>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="firstname"
              onChange={setFormData}
              className="block border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="FirstName"
              required
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="lastname"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="LastName"
              required
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="email"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="text"
              name="salary"
              onChange={setFormData}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="Salary"
            />
          </div>
          <div className="input-type w-fit pb-4">
            <input
              type="date"
              name="date"
              onChange={setFormData}
              className="border px-5 py-3 focus:outline-none rounded-md"
              placeholder="Salary"
            />
          </div>
          <div className="input-type w-fit pb-4">
            <SwitchLabels
              color="success"
              label="is Active"
              onHandleSwitch={(value) => setActive(value)}
            />
          </div>

          <button
            style={{ width: "17%" }}
            className="flex justify-center text-md  bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
          >
            Add
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
