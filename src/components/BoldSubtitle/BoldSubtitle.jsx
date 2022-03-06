import React from 'react';
import cn from 'classnames';
import styles from './BoldSubtitle.module.scss';

const BoldSubtitle = ({ children, className }) => {
  return (
    <h2 className={cn(styles.boldSubtitle, className)}>{children}</h2>
  )
}

export default BoldSubtitle;
