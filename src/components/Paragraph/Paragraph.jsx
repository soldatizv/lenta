import React from "react";
import cn from 'classnames';
import styles from './Paragraph.module.scss';

const Paragraph = ({ text, className = '' }) => {
  return <p className={cn(styles.paragraph, className)}>{text}</p>;
};

export default Paragraph;
