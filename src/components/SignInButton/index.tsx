import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [session, loading] = useSession();

  //const isUserLoggedIn = true;
  // return isUserLoggedIn ? (
  //   <button type="button" className={styles.signInButton}>
  //     <FaGithub color="#04d361" />
  //     Daniel Carvalho
  //     <FiX color="#737380" className={styles.closeIcon} />
  //   </button>
  // ) : (
  //   <button type="button" className={styles.signInButton}>
  //     <FaGithub color="#ebA417" />
  //     Sign In with Github
  //   </button>
  // );

  return (
    <>
      {!session && (
        <button
          type="button"
          className={styles.signInButton}
          onClick={() => signIn("github")}
        >
          <FaGithub color="#ebA417" />
          Sign In with Github
        </button>
      )}
      {session && (
        <button
          type="button"
          className={styles.signInButton}
          onClick={() => signOut()}
        >
          <FaGithub color="#04d361" />
          {session.user.name}
          <FiX color="#737380" className={styles.closeIcon} />
        </button>
      )}
    </>
  );
}
