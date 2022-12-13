import Layout from "../components/layout";
import SEO from "../components/seo";
import AppLayout from "../components/AppLayout/AppLayout";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";
import HomeContent from "../sections/home";


export default function Home() {
 const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <section >
      <Layout>
        <SEO title={"employee"} />
        
        {session ? User({ session, handleSignOut }) : Guest()}
      </Layout>
    </section>
  );
}


// Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className="">
   
      <HomeContent />
    </main>
  );
}

// Guest
function Guest() {
  return (
    <AppLayout>
    <main className=" mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link
          href={"auth/login"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          
          Sign In
        </Link>
      </div>
    </main>
    </AppLayout>
  );
}

export async function getSererSideProps(context) {
  const session = await getSession(context.req);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
