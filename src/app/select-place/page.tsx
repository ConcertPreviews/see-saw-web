'use client';

import styled from 'styled-components';

const SelectPlacePage = () => {
  return (
    <SelPlaceWrapper>
      <header>
        <Title>시야를 미리 볼 장소를 선택하세요</Title>
      </header>
      <PlaceImgContainer>
        <div>하나</div>
        <div>둘</div>
        <div>셋</div>
        <div>넷</div>
      </PlaceImgContainer>
    </SelPlaceWrapper>
  );
};

export default SelectPlacePage;

const SelPlaceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.3rem;

  align-items: center;
  margin-top: 4.2rem;
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
  margin: auto;
  & > div {
    margin-bottom: 1.27rem;
  }
`;
