'use client';

import { useState } from 'react';
import './colorPicker.scss';

// interface Props {
//   color: [
//     { name: 'primary_blue'; color: '#82D616' },
//     { name: 'red'; color: '#82D616' },
//     { name: 'yellow'; color: '#82D616' },
//     { name: 'green'; color: '#82D616' },
//     { name: 'blue'; color: '#82D616' },
//     { name: 'purple'; color: '#82D616' },
//     { name: 'pink'; color: '#82D616' },
//     { name: 'gray'; color: '#82D616' },
//   ];
// | 'red'
// | 'yellow'
// | 'green'
// | 'blue'
// | 'purple'
// | 'pink'
// | 'gray';
// }

export default function ColorPicker() {
  const colors: { name: string; color: string }[] = [
    { name: 'primary_blue', color: '#3689ff' },
    { name: 'red', color: '#ff4d4d' },
    { name: 'yellow', color: '#fbbc05' },
    { name: 'green', color: '#82D616' },
    { name: 'blue', color: '#14ABFF' },
    { name: 'purple', color: '#8B41FF' },
    { name: 'pink', color: '#FF59C7' },
    { name: 'gray', color: '#D9D9D9' },
  ];

  const [selectedColor, setSelectedColor] = useState<null | string>(null);

  return colors.map((el, index) => {
    return (
      <button
        key={index}
        className="color_picker"
        style={{ backgroundColor: `${el.color}` }}
        onClick={() => setSelectedColor(el.color)}>
        {selectedColor === el.color && (
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.534 0.460269C16.1553 1.07396 16.1553 2.06895 15.534 2.68265L7.57826 10.5397C7.27986 10.8344 6.87513 11 6.45312 11C6.03112 11 5.62639 10.8344 5.32799 10.5397L0.466046 5.73805C-0.155349 5.12436 -0.155349 4.12937 0.466047 3.51567C1.08744 2.90198 2.09492 2.90198 2.71632 3.51567L6.45312 7.20616L13.2837 0.46027C13.9051 -0.153423 14.9126 -0.153423 15.534 0.460269Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    );
  });
}
