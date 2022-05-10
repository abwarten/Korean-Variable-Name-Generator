import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #efefef;
  font-family: pretendard;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const Frame = styled('div')`
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
`;

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
`;

export const SearchContainer = styled(animated.div)`
  margin-top: 15em;
`;

export const SearchButton = styled(animated.button)`
  margin-left: 1em;
  padding: 0.5em 1em;
  background: #efefef;
  border: none;
  border-radius: 0.5rem;
  color: #444;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
`;

export const SearchInput = styled(animated.input)`
  width: 20em;
  border: none;
  text-align: center;
  font-family: pretendard;
  font-size: 1.5rem;
  background: #efefef;
  border-radius: 10px;
  border: 3px solid #f3f4f7;
  box-shadow: 2px 2px 3px rgba(55, 84, 170, 0.15), inset 0px 0px 4px rgba(255, 255, 255, 0),
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px rgba(255, 255, 255, 1),
    0px 0px 4px rgba(255, 255, 255, 0.2) !important;
  padding: 10px 15px;
  outline: none !important;
  color: #535d74;
`;

export const AnimatedResultList = styled(animated.div)`
  height: 100vh;
`;

export const ResultList = styled(animated.div)`
  padding: 1.5em 5em;
  margin-top: 2em;
  background: #efefef;
  border: none;
  border-radius: 0.5rem;
  color: #444;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-align: center;
  outline: none;
  transition: 0.2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
`;
