import React from 'react';
import { Helmet } from 'react-helmet';

export default function Page1() {
  return (
    <div>
      <Helmet>
        <title>모두의 카</title>
        <meta property='og:title' content='콘텐츠 제목' />
        <meta
          property='og:url'
          content='https://kimjuno97.github.io/pre-onboarding-7th-2-1-1/'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://interview.platdev.net/model3.png'
        />
        <meta property='og:title' content='모두의 카' />
        <meta property='og:description' content='자동차 대여 플랫폼' />
      </Helmet>
    </div>
  );
}
