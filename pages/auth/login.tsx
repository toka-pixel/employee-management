import Head from "next/head";
import LayoutAuth from "../../components/layoutAuth/layoutAuth";
import Link from "next/link";

import styles from "../../styles/Form.module.scss";
import Image from "next/image";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Form, Input, Row, Col, Button, Spin, message } from "antd";

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  async function onFinish(values) {

    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
   
    if (status.ok){
       router.push(status.url)
    }else{
      message.error(status.error)
    }
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <LayoutAuth>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Login</h1>
        </div>

        {/* form */}

        <Form
          name="basicInformation"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="flex flex-col "
        >
          <Form.Item name="email">
            <Input placeholder="email" required />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="password" type="password" required />
          </Form.Item>
          <Button className="input-button " type="primary" htmlType="submit">
            login
          </Button>
        </Form>
        {/* login buttons */}
        {/* <div className="input-button">
          <button type="submit" className={styles.button}>
            Login
          </button>
          
        </div> */}
        <div className="input-button">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className={styles.button_custom}
          >
            Sign In with Google{" "}
            <Image
              src={"/assets/google.png"}
              width="20"
              height={20}
              alt={""}
            ></Image>
          </button>
        </div>
        <div className="input-button">
          <button
            type="submit"
            onClick={handleGithubSignin}
            className={styles.button_custom}
          >
            Sign In with Github{" "}
            <Image
              src={"/assets/github.png"}
              width={25}
              height={25}
              alt={""}
            ></Image>
          </button>
        </div>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          do not have an account yet?{" "}
          <Link className="text-blue-700" href={"register"}>
            Sign Up
          </Link>
        </p>
      </section>
    </LayoutAuth>
  );
}
