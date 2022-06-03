import { initializeApp } from "firebase/app";
import firebaseConfig from "./fiebase.config";

export const initilizeFirebaseApp = () => initializeApp(firebaseConfig);
