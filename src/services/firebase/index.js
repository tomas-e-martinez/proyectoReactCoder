import { getFirestore, collection, addDoc } from 'firebase/firestore'



export const firebaseServices = {
    createOrder: async (order) => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        const orderCreated = await addDoc(ordersCollection, order);
        return orderCreated;
    }
}