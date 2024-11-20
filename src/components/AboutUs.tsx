import React from 'react';

import config from '../config/index.json';
import { highlightWords } from '../utils/stringHelper';
import Divider from './Divider';

interface AboutUsItemProps {
  key: string;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

const AboutUsItem = ({
  key,
  title,
  description,
  image,
  reverse = false,
}: AboutUsItemProps) => {
  const titleComponent = (
    <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-3`}>
      {highlightWords(title)}
    </h3>
  );

  const descriptionComponent = (
    <p className={`text-gray-600 ${reverse ? 'mb-8' : ''}`}>
      {highlightWords(description)}
    </p>
  );

  const imageComponent = (
    <div className={`w-full sm:w-1/2 p-6`} style={{ alignSelf: 'center', placeItems: 'center' }}>
      <img className="h-6/6" src={image} alt={title} />
    </div>
  );

  return (
    <div
      key={key}
      id={'about_us'}
      className={`flex flex-wrap ${
        reverse ? 'flex-col-reverse sm:flex-row' : ''
      }`}
    >
      {reverse ? (
        <>
          {imageComponent}
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              {titleComponent}
              {descriptionComponent}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            {titleComponent}
            {descriptionComponent}
          </div>
          {imageComponent}
        </>
      )}
    </div>
  );
};

const AboutUs = () => {
  const { aboutUs } = config;
  const { title, items } = aboutUs;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />

        {items.map((item, idx) => (
          <AboutUsItem
            key={`AboutUsItem_${idx}`}
            title={item.title}
            description={item.description}
            image={item.img}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
