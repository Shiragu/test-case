import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import store from "./config/store";
import Feed from "./components/Feed/Feed";

export default class App extends Component {
  static propTypes = {
    postsLimit: PropTypes.number,
    updateInterval: PropTypes.number,
    feedUrl: PropTypes.string,
  };

  static defaultProps = {
    // сколько постов на странице отображать
    postsLimit: 10,
    // с какой частотой обновлять
    updateInterval: 10000,
    // ссылка, откуда берём фид постов
    feedUrl: "http://api.massrelevance.com/MassRelDemo/kindle.json",
  };

  render() {
    const { postsLimit, updateInterval, feedUrl } = this.props;

    return (
      <Provider store={store}>
        <Feed
          limit={postsLimit}
          updateInterval={updateInterval}
          feedUrl={feedUrl}
        />
      </Provider>
    );
  }
}
