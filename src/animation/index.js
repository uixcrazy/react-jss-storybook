import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { getData } from '../_utils/fetch-api';
import ListPhotos from '../_utils/ctotest/ListPhotos';
import Demo01 from './demo01';
import Demo02 from './demo02';
import Demo03 from './demo03';

const styles = {
  '@global': {
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    '*:focus': {
      outline: 'none',
    },
  },
};

const hotKeywords = [
  { name: 'quả táo kimura' },
  { name: 'thien nga den' },
  { name: 'ông nội vượt ngục' },
  { name: '5 Centimet Trên Giây' },
  { name: 'Nhóc Nicolas và các bạn' },
  { name: 'Chuyện Con Mèo Dạy Hải Âu Bay ' },
  { name: 'Chuyện Con Ốc Sên Muốn Biết Tại Sao Nó Chậm Chạp' },
];

class Animation extends React.Component {
  state = {
    error: false,
    items: [],
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    getData({
      apiURL: 'https://api.unsplash.com',
      // change API /search?query=autumn&xp=&per_page=20
      endpoint: '/search',
      headers: {
        Authorization: 'Client-ID 9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251',
      },
      params: {
        query: 'white',
        xp: '',
        per_page: 10,
        page: 5,
      },
    })
      .then((data) => {
        console.log(data);
        this.setState({
          ...(data.errors
            ? { error: { message: data.errors.join(', ') } }
            : {
              items: data.photos.results,
              otherInfo: {
                totalCollections: data.collections.total,
                totalPhotos: data.photos.total,
                totalPhotographer: data.users.total,
                relatedSearches: data.related_searches,
              },
            }
          ),
        });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    return (
      <div style={{
        paddingRight: 100,
      }}>
        <div style={{
          padding: 10,
          background: '#f5f5f5',
          height: 500,
          overflow: 'auto',
        }}>
          <h1>use CSSTransition - react-transition-group</h1>
          <div style={{ height: 300 }}>
            <Demo03 />
          </div>

          <h1>use CSSTransition - react-transition-group</h1>
          <div style={{ height: 25, position: 'relative' }}>
            <Demo01 hotKeywords={hotKeywords}/>
          </div>
          <ListPhotos
            isLoaded={true}
            listPhotos={this.state.items}
            handleClickTag={this.handleClickTag}
          />
        </div>
        <h1>use CSS: keyframes - animation</h1>
        <div style={{ height: 500, overflow: 'auto' }}>
          <div style={{ height: 25, position: 'relative' }}>
            <Demo02 hotKeywords={hotKeywords}/>
          </div>
          <ListPhotos
            isLoaded={true}
            listPhotos={this.state.items}
            handleClickTag={this.handleClickTag}
          />
        </div>

      </div>
    );
  }
}

Animation.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(Animation);
