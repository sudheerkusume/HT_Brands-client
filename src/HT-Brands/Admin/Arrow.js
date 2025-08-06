import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Arrow = () => {
  const contentRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (open) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(scrollHeight + 'px');
    } else {
      setHeight('0px');
    }
  }, [open]);

  const toggleDetails = () => {
    setOpen(!open);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginTop: '20px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      backgroundColor: '#f9f9f9'
    }}>
      <div
        onClick={toggleDetails}
        style={{
          padding: '15px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          userSelect: 'none'
        }}
      >
Dashboard Home
        <span style={{
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
            <IoIosArrowForward />
        </span>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: 'max-height 0.4s ease',
          padding: open ? '0 15px 15px' : '0 15px',
          fontSize: '14px',
          lineHeight: '1.6',
          overflow: 'hidden'
        }}
      >
      </div>
    </div>
  );
};

export default Arrow;