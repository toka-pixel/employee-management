import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

type IProps = {
  label?: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | string;
  checked?: boolean;
  onHandleSwitch: Function;
};

export default function SwitchLabels(props: IProps) {
  const { label, color, checked, onHandleSwitch } = props;

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {

    onHandleSwitch(e.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Switch
          defaultChecked
          color="success"
          onChange={changeValue}
          // checked={checked}
          value={checked}
        />
      }
      label={label}
    />
  );
}
