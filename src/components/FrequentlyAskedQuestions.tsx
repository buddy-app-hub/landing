import React, { useState } from 'react';

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from '@mui/material';

import config from '../config/index.json';

interface AccordionFAQProps {
  key: string;
  question: string;
  answer: string;
  items?: { title: string, description: string }[];
}

function AccordionFAQ({
  key,
  question,
  answer,
  items = [],
}: AccordionFAQProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const highlightWords = (text: string) => {
    const regex = /\b(Buddy|Buddies)\b/g;
    const parts = text.split(regex);

    return parts.map((part: string, index: number) => {
      if (part === 'Buddy' || part === 'Buddies') {
        return (
          <span key={index} style={{ fontStyle: 'italic' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Accordion
      key={key}
      expanded={expanded}
      onChange={toggleExpanded}
      elevation={0}
      sx={{
        borderBottom: 'none',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
        <p
          className={`text-lg leading-6 font-medium text-gray-900 ${
            expanded ? 'text-primary' : ''
          } hover:text-primary`}
        >
          {highlightWords(question)}
        </p>
      </AccordionSummary>
      <AccordionDetails>
        <dd className="ml-2 text-base text-gray-500">
          <div>{highlightWords(answer)}</div>
          {items && !!items.length && (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {items.map((i, x: number) => (
                <li key={`key_${x}`}>
                  <strong>{highlightWords(i.title)}</strong>: {highlightWords(i.description)}
                </li>
              ))}
            </ul>
          )}
        </dd>
      </AccordionDetails>
    </Accordion>
  );
}

const FrequentlyAskedQuestions = () => {
  const { faqs } = config;
  const { title, items: faqsList } = faqs;

  return (
    <div className={`py-12 bg-background`} id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
        </div>

        <div className="mt-10">
          <Stack spacing={1.5}>
            {faqsList.map((faq, idx) => (
              <AccordionFAQ
                key={`accordionFAQ_${idx}`}
                question={faq.question}
                answer={faq.answer}
                items={faq.items ?? []}
              />
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
