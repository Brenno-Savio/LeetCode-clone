'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import themes from '@/context/themes';

interface Props {
  items: string[];
}

const FocusedList: FC<Props> = ({ items }) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);

  const setListRef = useCallback((el: HTMLLIElement | null, index: number) => {
    listRefs.current[index] = el;
  }, []);

  useEffect(() => {
    if (focusedIndex !== null && listRefs.current[focusedIndex]) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } =
        listRefs.current[focusedIndex]!;
      setPosition({
        top: offsetTop,
        left: offsetLeft,
      });
    }
  }, [focusedIndex]);

  const handleClick = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <FocusedListStyled className="relative" theme={themes}>
      <ul className={'list'}>
        {items.map((item, index) => (
          <li
            key={index}
            ref={(el) => setListRef(el, index)}
            className={`${'listItem'} ${focusedIndex === index ? 'focused' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div
        className={`movingDiv rounded-md ${focusedIndex !== null ? 'block shadow-xl' : 'hidden'}`}
        style={{
          top: position.top,
          left: position.left,
          width: listRefs.current[focusedIndex as number]?.offsetWidth,
          height: listRefs.current[focusedIndex as number]?.offsetHeight,
        }}
      />
    </FocusedListStyled>
  );
};

const FocusedListStyled = styled.div`
  width: 100%;

  .list {
    display: flex;
    flex-direction: column;
    grid-column: span 3 / span 3;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .listItem {
    color: ${(props) => props.theme.colorSecondaryAlt};
    padding: 11px 10px;
    margin: 5px 0;
    cursor: pointer;
    transition:
      background-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
  }

  .listItem:hover {
    color: #39bdff;
  }

  .focused:hover {
    color: ${(props) => props.theme.colorSecondaryAlt};
  }

  .movingDiv {
    position: absolute;
    background-color: white;
    transition:
      top 0.5s ease-in-out,
      left 0.5s ease-in-out,
      width 0.5s ease-in-out,
      height 0.5s ease-in-out;
    z-index: -1; /* Ensure it's behind the list items */
    pointer-events: none;
  }
`;

export default FocusedList;
