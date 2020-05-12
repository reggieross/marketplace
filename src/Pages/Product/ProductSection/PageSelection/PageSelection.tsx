import React from 'react';

export const PageSelection: React.FC<{
  numPages: number;
  currentPage: number;
  onPageSelect: (page: number) => void;
  maxViewablePages?: number;
}> = ({ numPages, currentPage, onPageSelect, maxViewablePages = 5 }) => {
  const pages = Object.keys(new Array(numPages));

  //since the first key is 0 we don't need it
  pages.shift();

  return <div>{} </div>;
};
