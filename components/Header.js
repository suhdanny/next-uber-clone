import tw from 'tailwind-styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../configs/firebase';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Header = () => {
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	const logout = () => {
		signOut(auth);
		router.push('/');
	};

	const userProfile = () => {
		if (!user) return;
		return (
			<div className='flex gap-2 items-center'>
				<div className='text-base'>{user.displayName}</div>
				<AiOutlineLogout size={20} style={{ cursor: 'pointer' }} onClick={logout} />
			</div>
		);
	};

	return (
		<Wrapper>
			<h1 className='mr-auto'>Uber</h1>
			{userProfile()}
		</Wrapper>
	);
};

const Wrapper = tw.div`
    bg-black text-white text-2xl py-2 px-14 flex items-center
`;

export default Header;
