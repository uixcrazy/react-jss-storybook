import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  logo: {
    display: 'flex',
    width: '10rem',
    height: '10rem',
    background: {
      image: `url(${require('../../assets/images/blackboard.svg')})`,
      repeat: 'no-repeat',
      position: [0, 0],
      size: 'contain',
    },
    fontSize: 0,
  },
};

const Bgrsvg = ({ classes }) => (
  <a href="#default" className={classes.logo}>CompanyLogo</a>
);

export default injectSheet(styles)(Bgrsvg);;
