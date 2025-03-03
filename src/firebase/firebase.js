import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4WIjphZLm8XV36M_xKt18q1xPkuMQrvQ",
    authDomain: "enzo-project-reactjs.firebaseapp.com",
    projectId: "enzo-project-reactjs",
    storageBucket: "enzo-project-reactjs.firebasestorage.app",
    messagingSenderId: "40104532288",
    appId: "1:40104532288:web:6968e54aba1d59a4da42a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
    const querySnapshot = await getDocs(collection(db, 'items'));
    return querySnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data(),
    }));
}

export async function getProductById(id) {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Producto no encontrado");
    }
}