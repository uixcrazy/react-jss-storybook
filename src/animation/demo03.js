import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // height: '100%',
    background: '#ccc',
  },
  no2: {
    flex: '1 1 auto',
    background: '#fff',
    transition: 'all 1s linear',
  },
  no3: {
    transition: 'all 1s linear',
    // position: 'relative',
    // top: -6,
    // left: -4,
  },
};

class Demo extends Component {
  state = {
    isShow: false,
  }

  render() {
    const { classes } = this.props;
    const { isShow } = this.state;
    return (
      <Fragment>
        <button className={classes.btn}
          onClick={() => {
            this.setState(state => ({ isShow: !state.isShow }));
          }}>toogle</button>
        <div className={classes.container}>
          <div>
          1
          </div>
          <div className={classes.no2}>
          2
          </div>
          {
            isShow
              ? <div className={classes.no3}>3</div>
              : null
          }
        </div>
      </Fragment>
    );
  }
}

Demo.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(Demo);
