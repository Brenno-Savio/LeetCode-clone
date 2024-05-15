import styled from 'styled-components';

const Background = () => {
  return (
    <BackgroundStyled>
      <div className="background">
        <span className="top-0 right-[16%] left-auto bottom-auto bg-[#2e2e2e]"></span>
        <span className="right-[49%] bottom-auto left-auto bg-[#222222]"></span>
        <span className="top-[380px] left-[-16%] bg-[#383d44]"></span>
        <span className="right-0 bottom-0 bg-[#2e2e2e]"></span>
      </div>
      <div>
        <div className="background-2"></div>
        <div className="background-3"></div>
      </div>
    </BackgroundStyled>
  );
};

const BackgroundStyled = styled.div`
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: skewY(12deg);
    transform-origin: 100%;
    background: linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%);
    z-index: -1;

    span {
      transition: 0.4s all;
      position: absolute;
      height: 190px;
      width: 33%;
    }
  }

  .background-2 {
    position: absolute;

    margin-top: 800px;
    width: 100%;
    height: 100%;
    transform: skewY(-12deg);
    transform-origin: 100%;
    background-color: #f7f9fc;
    z-index: -1;
  }

  .background-3 {
    position: absolute;
    margin-top: 1450px;
    width: 100%;
    height: 120%;
    background-color: #f7f9fc;
    z-index: -1;
  }
`;

export default Background;
