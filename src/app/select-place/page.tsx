'use client';

import styled from 'styled-components';

const SelectPlacePage = () => {
  const PLACE_DATA = [
    '고려대학교\n녹지운동장',
    '고려대학교\n화정체육관',
    '고양\n종합운동장',
    '고양\n체육관',
    '고척 스카이돔',
    '목동\n아이스링크장',
  ];
  return (
    <SelPlaceWrapper>
      <header>
        <Title>시야를 미리 볼 장소를 선택하세요</Title>
      </header>
      <PlaceImgContainer>
        {PLACE_DATA.map((data, idx) => {
          return (
            <PlaceBtn key={data} $idx={idx}>
              {data}
            </PlaceBtn>
          );
        })}
        {/* <PlaceBtn>{'고려대학교\n녹지운동장'}</PlaceBtn> */}
      </PlaceImgContainer>
    </SelPlaceWrapper>
  );
};

export default SelectPlacePage;

const SelPlaceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.3rem;

  width: 100%;
  height: 100dvh;

  align-items: center;
  padding-top: 4.2rem;
  padding-bottom: 3.2rem;
  background-image: url('/images/MainBackground.jpg');
`;

const Title = styled.h1`
  color: #000;

  font-size: 2.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.3rem;
`;

const PlaceImgContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.83rem;
  & > button {
    margin-bottom: 1.27rem;
  }
`;

const PlaceBtn = styled.button<{ $idx: number }>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 1.6rem;
  padding-bottom: 1.7rem;

  width: 15.9rem;
  height: 19.1rem;

  position: relative;

  border-radius: 1rem;
  border: none;

  color: #000;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.3rem;

  white-space: pre-wrap;

  &::before {
    content: '';

    position: absolute;

    background: ${({ $idx }) => `url(/images/Place${$idx}.png)`} no-repeat;
    background-size: contain;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    border-radius: 1rem;
  }
`;
