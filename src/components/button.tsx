import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: unknown) => void;
}
const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
};

const Button: React.SFC<ButtonProps> = props => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {}
};
export default Button;
