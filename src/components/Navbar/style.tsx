import { styled } from '@/styles/stitches.config';
import { Flex, Container } from '@/styles/Global';
import { Button } from '@/styles/Buttons';

export const Navbar = styled('nav', {
	background: '$grey0',
	borderBottom: '2px solid $brand1',
	position: 'fixed',
	inset: 0,
	bottom: 'auto',
	padding: '1rem 0',
	width: '100%',
	zIndex: '99999',

	[`& ${Container}`]: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between',
		'@mobile': {
			flexDirection: 'column',
		},
	},
});

export const LogoTipo = styled(Flex, {
	alignItems: 'center',

	'& img': {
		maxWidth: '310px',
		'@mobile': {
            maxWidth: '80%',
            width: '340px',
		},
	},
});

export const LogoTipoText = styled('span', {
	fontSize: '1.25rem',
	fontWeight: 600,
	color: '$grey4',
	fontFamily: '"IBM Plex Sans"',
	'@mobile': {
		fontSize: '1rem',
	},
});

export const NavbarLinks = styled(Flex, {
	'@mobile': {
		marginTop: '$3',
		flexDirection: 'column',
		alignItems: 'flex-end',
		width: '100%',
		'& a': {
			width: '100%',
			justifyContent: 'flex-end',
			paddingLeft: 0,
		},
	},
});

export const NavbarMobileArea = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
});
