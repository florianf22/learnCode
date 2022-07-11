import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class Videos extends React.Component {
  state = { videos: [], selectedVideo: null, burgerBar: 0 };

  componentDidMount() {
    this.onTermSubmit("html");
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  hamburgerMenu = (e) => {
    e.target.display = "none  ";
  };

  render() {
    return (
      <div>
        <div
          className={`absolute space-y-2 p-5  hover:bg-slate-500 ${
            this.state.burgerBar ? "hidden" : ""
          } `}
          onClick={() => this.setState({ burgerBar: 1 })}
        >
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
        <div
          className={` flex flex-col absolute space-y-2 p-5 h-screen w-25 bg-zinc-800 z-10 ${
            this.state.burgerBar ? "" : "hidden"
          } `}
        >
          <div
            className="inline-block p-2 text-white hover:bg-slate-500 "
            onClick={(e) => {
              console.log(e);
              console.log(e.target.innerText);
              this.onTermSubmit(e.target.innerText);
              this.setState({ burgerBar: 0 });
            }}
          >
            23
          </div>
          <div
            className="inline-block  p-2 text-white hover:bg-slate-500 "
            onClick={() => this.setState({ burgerBar: 0 })}
          >
            23jqwef fvefj;kql/blfleqbfjvqbp;fb
          </div>
          <div
            className="inline-block p-2 text-white  hover:bg-slate-500 "
            onClick={() => this.setState({ burgerBar: 0 })}
          >
            23
          </div>
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
