import tw from 'tailwind-styled-components';

const Header = () => {
	return (
		<Wrapper>
			<h1>Uber</h1>
		</Wrapper>
	);
};

const Wrapper = tw.div`
    bg-black text-white text-2xl py-2 px-14
`;

export default Header;
