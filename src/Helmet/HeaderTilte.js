import React from 'react';
import { Helmet } from 'react-helmet';

export default function HeaderTilte() {
  return (
    <div>
      <Helmet>
        <title>모두의 카</title>
        <meta property='og:title' content='전국민 렌탈 서비스 모두의 카' />
        <meta property='twitter:title' content='전국민 렌탈 서비스 모두의 카' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='모두의 카' />
        <meta
          property='og:url'
          content='https://kimjuno97.github.io/pre-onboarding-7th-2-1-1/'
        />
        <meta property='og:description' content='자동차 대여 플랫폼' />
        <meta property='twitter:description' content='자동차 대여 플랫폼' />
        <meta
          property='article:published_time'
          content='2022-05-07T09:00:00.000Z'
        />
        <meta
          property='article:modified_time'
          content='2022-05-10T09:00:00.000Z'
        />

        <meta
          property='og:image'
          content='https://interview.platdev.net/model3.png'
        />
        <meta name='twitter:card' content='car_image' />
        <meta
          property='twitter:image'
          content='https://interview.platdev.net/model3.png'
        />
      </Helmet>
    </div>
  );
}
