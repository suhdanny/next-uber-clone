import React from 'react';
import Header from '../components/Header';
import tw from 'tailwind-styled-components';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../configs/firebase';
import { useRouter } from 'next/router';

const Login = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const router = useRouter();

	const login = () => {
		signInWithGoogle();
		router.push('/drive');
	};

	return (
		<Wrapper>
			<Header />
			<LoginContainer>
				<SignInBox>
					<Heading>Welcome to Uber!</Heading>
					<Google onClick={login}>
						<FcGoogle size={28} />
						<Text>Continue with Google</Text>
					</Google>
				</SignInBox>
			</LoginContainer>
		</Wrapper>
	);
};

const Wrapper = tw.div`
    h-screen w-screen
`;

const LoginContainer = tw.div`
    h-full flex justify-center items-center
`;

const SignInBox = tw.div`
    h-fit w-fit bg-gray-100 flex flex-col items-center p-10 rounded
`;

const Heading = tw.div`
    text-2xl font-bold text-black
`;

const Google = tw.div`
    flex items-center justify-center p-2 border border-black mt-5 w-72 hover:bg-gray-200 cursor-pointer
`;

const Text = tw.div`
    font-bold text-sm ml-2
`;

export default Login;
