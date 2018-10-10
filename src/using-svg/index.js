import React from 'react';
import injectSheet from 'react-jss';
import BlackboardIcon from './blackboard.svg';

const styles = {
  logo: {
    width: '10rem',
    height: '10rem',
    display: 'inline-block',
    background: {
      image: `url(${BlackboardIcon})`,
      repeat: 'no-repeat',
      position: [0, 0],
      size: 'contain',
    },
    fontSize: 0,
  },
  '&:focus': {
    outline: 'none',
  },
};

const BgrSVG = ({ classes }) => (
  <a href="#default" className={classes.logo}>blackboard</a>
);

export default injectSheet(styles)(BgrSVG);
