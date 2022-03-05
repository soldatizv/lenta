import React from "react";
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({ type, children, wrapperClassName, className }) => {
  if (type === "comment") {
    return (
    <div className={wrapperClassName}>
      <button className={cn(styles.comment, className)}>
        {children}
      </button>
    </div>);
  }
  return <button className={className}>{children}</button>;
};

export default Button;
