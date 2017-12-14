import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import styles from './Home.css';

const cx = classnames.bind(styles);

export default class Home extends React.Component {
  render() {
    return (
      <div className={cx('header')}>
        <div className={cx('content')}>
          Home Screen
          <div>
            content
          </div>
        </div>
        
      </div>
    );
  }
};
