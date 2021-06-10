import React, { Component } from "react";
import Linkify from "linkifyjs/react";
import moment from "moment";

import "./Post.css";

// непосредственно сам пост, тело поста собираем с помощью отдельных функций

export default class Post extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="post">
        <div className="post-body">
          {this.renderUsername()}
          {this.renderContent()}
          {this.renderDate()}
        </div>
      </div>
    );
  }

  renderUsername() {
    const { user } = this.props;

    return (
      <div className="post-user">
        <span className="post-user-name">{user.name}</span>
      </div>
    );
  }

  renderContent() {
    const { text } = this.props;
    // linkifyjs для отображения ссылок в тексте
    return (
      <div className="post-text">
        <Linkify>{text}</Linkify>
      </div>
    );
  }

  renderDate() {
    const { created_at } = this.props;
    // для быстрого форматирования даты библиотека moment
    return (
      <div className="post-date">
        {moment(new Date(created_at)).format("D/MM/YYYY HH:MM")}
      </div>
    );
  }
}
