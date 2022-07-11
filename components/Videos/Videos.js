import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../app/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import { TAGS } from '../../constants';

class Videos extends React.Component {
  state = { videos: [], selectedVideo: null, burgerBar: 0 };

  componentDidMount() {
    this.onTermSubmit('html');
  }

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  hamburgerMenu = e => {
    e.target.display = 'none  ';
  };

  render() {
    return (
      <div>
        <div
          className={`space-y-2 p-5 inline-block hover:bg-slate-500 ${
            this.state.burgerBar ? 'hidden' : ''
          } `}
          onClick={() => this.setState({ burgerBar: 1 })}
        >
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
        <div
          className={`flex flex-col absolute space-y-2 p-5 h-screen w-25 bg-zinc-800 z-10 
          ${this.state.burgerBar ? '' : 'hidden'} overflow-auto py-8`}
        >
          {TAGS.map((tag, index) => {
            return (
              <div
                key={index}
                className="inline-block p-2 text-white hover:bg-slate-500"
                onClick={e => {
                  console.log(e);
                  console.log(e.target.innerText);
                  this.onTermSubmit(e.target.innerText);
                  this.setState({ burgerBar: 0 });
                }}
              >
                {tag.name}
              </div>
            );
          })}
        </div>
        <div className="container max-w-[85%] mx-auto h-screen ">
          <SearchBar onSubmit={this.onTermSubmit} />
          <div className="flex overflow-hidden gap-10">
            <div className="item w-8/12 h-full">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="item w-4/12 h-full">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
