import React from 'react';

interface PaymentsPageButtonProps {
  marginTop: string;
  marginBottom: string;
  title: string;
  onClick: () => void;
  width: string;
}

const PaymentsPageButton: React.FC<PaymentsPageButtonProps> = ({
  marginTop,
  title,
  onClick,
  width,
  marginBottom
}) => {
  return (
    <button
      className='payments-page__pickup-point-button'
      onClick={onClick}
      style={{ marginTop: marginTop, width: width, marginBottom: marginBottom }}
    >
      <span className='payments-page__pickup-point-button-title'>
        {title}
      </span>
    </button>
  );
};

export default PaymentsPageButton;
