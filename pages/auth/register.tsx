import Head from "next/head";
import LayoutAuth from "../../components/layoutAuth/layoutAuth";
import { useRouter } from "next/router";
import styles from "../../styles/Form.module.scss";
import { HiEye } from "react-icons/hi";
import { useState, useReducer } from "react";
import { Form, Input,  Button, message } from "antd";

export default function Login(props) {
  const router = useRouter();
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [password, setPassword] = useState("");

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateConfirmPassword = (rule, value, callback) => {
    if (formData.confirmpassword != formData.password) {
      callback("confirm Password don't match password");
    } else {
      callback();
    }
  };

  const validatePassword = (rule, value, callback) => {
    if (value?.length < 8) {
      return Promise.reject("password must be more than 8 chars");
    } else {
      //  callback();
      return Promise.resolve();
    }
  };

  const onFinish = async (values) => {
    // if (values.confirmpassword != values.password) {
    //   message.error("confirm Password don't match password");
    // }
    if (password?.length < 8) {
      message.error('password must be more than 8 chars"');
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };

      await fetch("http://localhost:3000/api/auth/signup", options)
        .then((res: any) => res.json())
        .then((data) => {
          if (data.status < 300) {
            router.push("http://localhost:3000/auth/login");
          } else {
            message.error(data.message);
          }
        });
    }
  };

  return (
    <LayoutAuth>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Rgister</h1>
        </div>

        {/* form */}
        <Form
          name="basicInformation"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="flex flex-col "
        >
          <Form.Item name="username">
            <Input placeholder="username" required onChange={setFormData} />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="email" required onChange={setFormData} />
          </Form.Item>
          <Form.Item
            name="password"
            // rules={
            //   [
            //     // { required: true, message: "Please input your Password!" },
            //     //  { validator: validatePassword },
            //   ]
            // }
            style={{ position: "relative" }}
          >
            <span
              className={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {" "}
              <HiEye />
            </span>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handlePassword}
              required
            />
          </Form.Item>
          {/* <Form.Item
            rules={[
              { required: true, message: "Please input your Password!" },
              // { validator: validateConfirmPassword },
            ]}
            name="confirmpassword"
            style={{position:'relative'}}
          >
              <span  className={styles.eye} onClick={()=>setShowCPassword(!showCPassword)} > <HiEye /></span>
            <Input
              placeholder="confirmpassword"
              type={ showCPassword ? 'text': 'password'}
              onChange={setFormData}
            />
            
          </Form.Item> */}
          <br />

          <Button className="input-button" type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </section>
    </LayoutAuth>
  );
}
