'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { FaBriefcase, FaBuilding, FaQuestion, FaTrophy } from 'react-icons/fa';
import { MdHexagon } from 'react-icons/md';
import { PiBridgeLight } from 'react-icons/pi';
import { RiGraduationCapFill, RiTeamFill } from 'react-icons/ri';

import Background from '@/components/background/Background';
import Card from '@/components/card/Card';
import FocusedList from '@/components/focusedList/FocusedList';
import Ipad from '@/components/ipad/Ipad';
import Navbar from '@/components/navbar/Navbar';

import themes from '@/context/themes';
import texts from '../context/texts';

const LandingPage = () => {
  return (
    <LandingPageStyled theme={themes}>
      <Background />
      <Navbar />
      <section className="section-1">
        <div className="ipad-container">
          <Ipad />
        </div>
        <div className="text-container">
          <h1>{texts.titleHomePage}</h1>
          <span>{texts.descHomePage}</span>
          <Link href={'/'} className="link-1">
            Create Account {'>'}
          </Link>
        </div>
      </section>
      <section className="section-2">
        <div className="text-container-2">
          <h2>
            {texts.subTitleHomePage}
            <div className="m-4">
              <MdHexagon className="hexagon" />
              <div className="circle">
                <RiGraduationCapFill />
              </div>
            </div>
          </h2>
          <span>{texts.descSubHomePage}</span>
          <Link href={'/'} className="link-styled">
            Get Started {'>'}
          </Link>
        </div>
        <div className="card-container">
          <Card color="bg-sky-400" gradientColor="from-sky-300" />
        </div>
      </section>
      <section className="section-3">
        <aside className="aside-a">
          <div className="icons-container">
            <div className="icon-container icon-container-1">
              <MdHexagon className="hexagon hexagon-1" />
              <div className="circle circle-1">
                <FaQuestion />
              </div>
            </div>
            <div className="icon-container icon-container-2">
              <MdHexagon className="hexagon hexagon-2" />
              <div className="circle circle-2">
                <RiTeamFill />
              </div>
            </div>
            <div className="icon-container icon-container-3">
              <MdHexagon className="hexagon hexagon-3" />
              <div className="circle circle-3">
                <FaTrophy />
              </div>
            </div>
          </div>
          <h3>{texts.titleQCC}</h3>
          <span>{texts.descQCC}</span>
          <Link href={'/'} className="link-styled">
            {'View Questions >'}
          </Link>
        </aside>
        <aside className="aside-b">
          <div className="icons-container">
            <div className="icon-container icon-container-4">
              <MdHexagon className="hexagon hexagon-4" />
              <div className="circle circle-4">
                <FaBriefcase />
              </div>
            </div>
            <div className="icon-container icon-container-5">
              <MdHexagon className="hexagon hexagon-5" />
              <div className="circle circle-5">
                <FaBuilding />
              </div>
            </div>
          </div>
          <h3>{texts.titleCC}</h3>
          <span>{texts.descCC}</span>
          <Link href={'/'} className="link-styled">
            {'Business Opportunities >'}
          </Link>
        </aside>
      </section>
      <section className="section-4">
        <div className="icon-container icon-container-6">
          <MdHexagon className="hexagon" />
          <div className="circle">{'</>'}</div>
        </div>
        <h4>Developer</h4>
        <span>{texts.descDeveloper}</span>
        <div className="code-in-container">
          <textarea name="" id=""></textarea>
          <aside>
            <FocusedList
              items={['</> Linked List', '</> Binary Tree', '</> Fibonacci']}
            />
            <div className="link-container">
              <Link href={'/'} className="link-styled">
                {'Create a Playground >'}
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-5">
        <div className="icon-container icon-container-7">
          <MdHexagon className="hexagon" />
          <div className="circle">
            <PiBridgeLight className='text-3xl' />
          </div>
        </div>
        <h5>{`Made with ❤️ by SF`}</h5>
        <span>{texts.descLoveLC}</span>
        <div></div>
        <span>{texts.lastDesc}</span>
        <Link href={'/'} className="link-styled">
          {'Join Our Team >'}
        </Link>
      </section>
      <footer></footer>
    </LandingPageStyled>
  );
};

const LandingPageStyled = styled.div`
  .link-styled {
    color: ${(props) => props.theme.colorSecondaryAlt};
  }

  .link-styled:hover {
    color: #39bdff;
  }

  .section-1 {
    display: flex;
    flex-direction: row;
    grid-row: span 1 / span 1;
    justify-content: space-between;
    margin: 96px 48px;

    .ipad-container {
      margin: 0 20px;
      rotate: -10deg;
    }

    .text-container {
      color: white;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 0 20px;

      h1 {
        font-size: 36px;
        font-weight: 500;
        line-height: 40px;
      }

      span {
        text-align: center;
        font-size: 18px;
        line-height: 28px;
        padding: 0 40px;
        color: rgb(156 163 175 / 1);
      }

      .link-1 {
        padding: 8px 12px;
        background-color: ${(props) => props.theme.colorSecondary};
        border-radius: 9999px;
      }
    }
  }

  .section-2 {
    display: flex;
    flex-direction: row;
    grid-row: span 2 / span 2;
    margin: 75px 0;

    .text-container-2 {
      width: 600px;
      display: flex;
      flex-direction: column;
      text-align: end;

      h2 {
        display: flex;
        align-items: center;
        justify-content: end;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        margin: 8px 0;
        color: ${(props) => props.theme.colorSecondary};

        div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          .hexagon {
            font-size: 82px;
            z-index: 1;
            color: none;
          }
          .circle {
            position: absolute;
            width: 35px;
            height: 35px;
            background-color: white;
            border-radius: 100%;
            z-index: 2;
          }
        }
      }

      span {
        text-align: end;
        color: rgb(156 163 175 / 1);
        margin: 15px 0 15px 144px;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-10%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    .card-container {
      margin: 0 96px;
      animation: bounce 10s infinite ease-in-out;
    }
  }

  .section-3 {
    display: flex;
    flex-direction: row;
    grid-row: span 2 / span 2;
    justify-content: space-between;
    margin: 50px 128px;
    padding: 25px;

    aside {
      display: flex;
      flex-direction: column;
      grid-column: span 3 / span 3;

      .icons-container {
        display: flex;
        flex-direction: row;
        grid-row: span 3 / span 3;
        align-items: center;
        justify-content: start;

        .icon-container {
          position: absolute;
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;

          .hexagon {
            font-size: 82px;
            z-index: 1;
          }
          .circle {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 35px;
            height: 35px;
            background-color: white;
            border-radius: 100%;
            font-size: 25px;
            z-index: 2;
          }
        }

        .icon-container-1 {
          z-index: 10;

          .hexagon-1 {
            color: ${(props) => props.theme.colorSecondaryAlt};
          }

          .circle-1 {
            color: ${(props) => props.theme.colorSecondaryAlt};
          }
        }

        .icon-container-2 {
          z-index: 9;
          right: 9%;

          .hexagon-2 {
            color: ${(props) => props.theme.colorTertiaryAlt};
          }

          .circle-2 {
            color: ${(props) => props.theme.colorTertiaryAlt};
          }
        }

        .icon-container-3 {
          z-index: 8;
          right: 19%;

          .hexagon-3 {
            color: ${(props) => props.theme.colorQuaternaryAlt};
          }

          .circle-3 {
            color: ${(props) => props.theme.colorQuaternaryAlt};
          }
        }

        .icon-container-4 {
          z-index: 10;

          .hexagon-4 {
            color: ${(props) => props.theme.colorQuaternary};
          }

          .circle-4 {
            color: ${(props) => props.theme.colorQuaternary};
          }
        }

        .icon-container-5 {
          z-index: 9;
          left: -8%;

          .hexagon-5 {
            color: ${(props) => props.theme.colorPrimaryAlt};
          }

          .circle-5 {
            color: ${(props) => props.theme.colorPrimaryAlt};
          }
        }
      }

      h3 {
        font-weight: 500;
        font-size: 22px;
        line-height: 1.5em;
      }

      span {
        margin: 20px 0;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.9em;
        letter-spacing: 0.03em;
        opacity: 0.5;
      }
    }

    .aside-a {
      padding: 0 25px;
      border-right: 1px solid rgb(255, 255, 255);

      h3 {
        color: ${(props) => props.theme.colorSecondaryAlt};
      }
    }

    .aside-b {
      padding: 0 25px;

      h3 {
        color: ${(props) => props.theme.colorQuaternary};
      }
    }
  }

  .section-4 {
    display: flex;
    flex-direction: column;
    grid-column: span 3 / span 3;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    padding: 25px 160px;

    .icon-container-6 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .hexagon {
        font-size: 82px;
        z-index: 1;
        color: none;
        color: ${(props) => props.theme.colorSecondary};
      }
      .circle {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background-color: white;
        border-radius: 100%;
        z-index: 2;
        color: ${(props) => props.theme.colorSecondary};
      }
    }

    h4 {
      font-weight: 500;
      font-size: 22px;
      line-height: 1.5em;
      margin: 10px 0 20px;
      color: ${(props) => props.theme.colorSecondary};
    }

    span {
      align-items: center;
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.9em;
      letter-spacing: 0.03em;
      opacity: 0.5;
      margin: 0 128px;
    }

    .code-in-container {
      display: flex;
      flex-direction: row;
      grid-row: span 2 / span 2;
      margin: 25px 0;
      width: 100%;
      height: 384px;
      font-size: 14px;

      textarea {
        border-color: gray;
        border-style: dashed;
        border-width: 1px;
        border-radius: 3%;
        width: 57%;
        height: 100%;
        margin: 5px 25px;
      }

      textarea:focus {
        outline: none;
      }

      aside {
        .link-container {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding-left: 10px;
        }
      }
    }
  }

  .section-5 {
    display: flex;
    flex-direction: column;
    grid-column: span 3 / span 3;
    align-items: center;
    justify-content: center;
    margin: 50px 128px;

    .icon-container-7 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .hexagon {
        font-size: 82px;
        z-index: 1;
        color: none;
        color: red;
      }
      .circle {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background-color: white;
        border-radius: 100%;
        z-index: 2;
        color: red;
      }
    }

    h5 {
      color: red;
      font-weight: 500;
      font-size: 22px;
      margin: 10px 0 0px;
      line-height: 1.5em;
    }

    span {
      display: flex;
      text-align: center;
      justify-content: center;
      font-weight: 400;
      opacity: 0.5;
      font-size: 15px;
      line-height: 1.9em;
      letter-spacing: 0.03em;
      max-width: 600px;
      margin: 25px 50px;
    }
  }
`;

export default LandingPage;
