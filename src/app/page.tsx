'use client';

import { styled } from 'styled-components';

export default function Home() {
  return (
    <div>
      <TestTitle>스타일드 컴포넌트 적용 테스트입니다</TestTitle>
      <TestContent>잘 적용되네요</TestContent>
    </div>
  );
}

const TestTitle = styled.h1`
  color: blue;
`;

const TestContent = styled.a`
  color: red;
`;
