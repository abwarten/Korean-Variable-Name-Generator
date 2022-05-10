import React, { useRef, useState, useEffect, FC } from 'react';
import { useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import {
  Container,
  Frame,
  Content,
  SearchButton,
  SearchInput,
  ResultList,
  AnimatedResultList,
  SearchContainer,
} from './styles';
import { useQuery } from 'react-query';

import { ReactComponent as Search } from '../utils/svg/search.svg';

import axios from 'axios';

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
  }
>(({ defaultOpen = false }) => {
  const [isInput, setInput] = useState('');
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });

  const papago = async () => {
    const { data } = await axios.post(
      'https://openapi.naver.com/v1/papago/n2mt',
      { source: 'ko', target: 'en', text: isInput },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Naver-Client-Id': process.env.NaverClientId as any,
          'X-Naver-Client-Secret': process.env.NaverClientSecret as any,
        },
        withCredentials: true,
      },
    );

    return data;
  };

  const { data, isLoading, isIdle, isError } = useQuery('papago', papago);

  if (isLoading || isIdle) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <Container>
      <Frame>
        <SearchContainer>
          <SearchInput onChange={(e) => setInput(e.target.value)} />
          <SearchButton onClick={() => setOpen(!isOpen)}>
            <Search />
          </SearchButton>
        </SearchContainer>

        <Content
          style={{
            opacity,
            height: isOpen && previous === isOpen ? 'auto' : height,
          }}
        >
          {isLoading && (
            <AnimatedResultList ref={ref} style={{ y }}>
              {(data as any).map((item: any, index: any) => (
                <ResultList key={index}>{item}</ResultList>
              ))}
            </AnimatedResultList>
          )}
        </Content>
      </Frame>
    </Container>
  );
});

export { Tree };
