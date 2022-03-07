import React from 'react';
import cn from 'classnames'
import { ReactComponent as QuoteIcon } from '../../images/quote.svg';
import styles from './Quote.module.scss';

const Quote = ({ text, author, position, className }) => {
  return (
    <div className={cn(styles.quoteWrapper, className)}>
      <QuoteIcon />
      <div className={styles.text}>{text}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.authorPosition}>{position}</div>
    </div>
  )
}

export default Quote;
