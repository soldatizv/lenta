import React from "react";
import cn from 'classnames';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children, className = '' }) => {
  return <p className={cn(styles.paragraph, className)}>{children}</p>;
};

export default Paragraph;
