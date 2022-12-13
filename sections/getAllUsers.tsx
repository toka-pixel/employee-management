import { useState, useEffect } from "react";
import useSWR from "swr";
import Table from "../components/table";
import { getUsers, deleteUser } from "../lib/helper";
import { getAllUsers } from "../redux/fetchUsers";
import { User } from "../types/user";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/index";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";


const GetAllUsers = (props) => {
  const [open, setOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [id, setId] = useState<string>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  const dispatch = useAppDispatch();
  //let users=useSelector((state:any)=>state.user.userList && state.user.userList)

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
    // dispatch( getAllUsers())
  }, []);



  const update = (id: string) => {

    router.push(`/users/${id}`);
  };

  const deleteOneUser = async (id: string) => {
    handleClickOpen();
    setId(id);
  };

  return (
    <>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {"Are you sure to delete this employee ?"}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={async () => {
                handleClose();
                setRemove(true);
                deleteUser(id)
                .then(async (res) => {
                  getUsers().then((res) => setUsers(res));
                })
              }}
              autoFocus
            >
              ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Table
        users={users}
        update={update}
        deleteOneUser={deleteOneUser}
       
      ></Table>
    </>
  );
};

export default GetAllUsers;
