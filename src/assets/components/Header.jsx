// Imports
import styled from 'styled-components';
import HeaderPng from '../img/logoImage.png';

// Estilo do componente
const HeaderImage = styled.img`
   width: 100%;
   height: 30vh;
   margin-bottom: 5vh;
`;


// Componente Header
function Header() {
    return (
        <>
        <HeaderImage src={HeaderPng} alt="Imagem do banner" />
        </>
    );
}

export default Header;
