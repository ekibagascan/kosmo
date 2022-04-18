import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #000000;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BigH1 = styled.h1`
  color: #fff;
  font-size: 305px;
  text-align: center;
  line-height: 0px;
  letter-spacing: 10px;
  font-weight: 900;
  font-family: "Anton", sans-serif;
  text-shadow: 8px 0px 1px #ff00ff;

  @media screen and (max-wodth: 768px) {
    font-size: 40px;
  }
  @media screen and (max-wodth: 480px) {
    font-size: 32px;
  }
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  line-height: 0px;
  letter-spacing: 5px;

  @media screen and (max-wodth: 768px) {
    font-size: 40px;
  }
  @media screen and (max-wodth: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-wodth: 768px) {
    font-size: 24px;
  }
  @media screen and (max-wodth: 480px) {
    font-size: 18px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 30px;
`;
