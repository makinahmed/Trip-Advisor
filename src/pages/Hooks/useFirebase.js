import { useEffect, useState } from "react";
import { initilizeFirebaseApp } from "../Firebase/firebase.initilize";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

initilizeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [userMail, setUserMail] = useState("");
  const [userData, setUserData] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  // console.log(userMail, userMail);
  // update users email
  console.log(userData, " user data");

  const updateUserEmail = (newEmail) =>
    updateEmail(auth?.currentUser, newEmail)
      .then(() => {
        console.log("Email Updated");
      })
      .catch((error) => {
        console.log("Email Update Failed!");
      });

  //   register new user

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        setUser(newUser?.user);
        console.log(newUser);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setUserMail(user?.email));
  };

  // sign in user with email and password
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential?.user);
        // console.log(userCredential?.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setUserMail(user?.email));
  };
  //   sign in user with google

  const signinWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result?.user);

        fetch(`https://tripadvisorarshad.herokuapp.com/add-user-by-google`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(result.user),
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  // reset password mail
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMailSent(true);
      })
      .catch((error) => {
        setError(false);
      });
  };

  // sign out user

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Current User

  useEffect(() => {
    const user = auth?.currentUser;
    setUser(user);
  }, []);

  useEffect(() => {
    fetch(
      `https://tripadvisorarshad.herokuapp.com/user-data?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .finally((e) => console.log(e));
  }, [user?.email]);

  // manage state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => localStorage.setItem("tripavisitor", token));
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);
  return {
    signinWithGoogle,
    user,
    error,
    setError,
    signOutUser,
    signInUser,
    registerUser,
    resetPassword,
    mailSent,
    userMail,
    updateUserEmail,
    userData,
  };
};
export default useFirebase;
