import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ShippingReturns = () => {
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
        Shipping & Returns
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
        <p>Hassle-free returns within 3 days; specific conditions apply based on products and promotions.</p>
        <p>Issues with defective, incorrect, or damaged products must be reported within 24 hours of delivery otherwise not considered for Returns and exchanges .</p>
        <p>Items purchased during special sales with free product offers, like BOGO or items purchased at discount prices or with coupons are ineligible for returns and exchanges.</p>
        <p>No Returns and No Exchanges on sale items or products brought with coupons.</p>
      </div>
    </div>
  );
};

export default ShippingReturns;