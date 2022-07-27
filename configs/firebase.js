import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDsBcSe9ulwHnKmDqsxcns7GVlQ-GbsILg',
	authDomain: 'next-uber-clone.firebaseapp.com',
	projectId: 'next-uber-clone',
	storageBucket: 'next-uber-clone.appspot.com',
	messagingSenderId: '306338697752',
	appId: '1:306338697752:web:8bd8075a89ced88a37696d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
