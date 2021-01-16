import {apiConfig} from "./utils";

class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _fetchRequest(path, config) {
    return fetch(`${this._url}${path}`, config)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getUserInfo() {
    return this._fetchRequest('users/me', {
      headers: this._headers
    });
  }

  getInitialCards() {
    return this._fetchRequest(`cards`, {
      headers: this._headers
    });
  }

  getStartInfo() {
    return Promise.all([
      this.getUserInfo(),
      this.getInitialCards()
    ]);
  }

  updateUserInfo(data) {
    return this._fetchRequest('users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    });
  }

  addNewCard(card) {
    return this._fetchRequest('cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    });
  }

  likesCard(card) {
    return this._fetchRequest(`cards/likes/${card}`, {
      method: 'PUT',
      headers: this._headers
    });
  }

  dislikesCard(card) {
    return this._fetchRequest(`cards/likes/${card}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  deleteCard(card) {
    return this._fetchRequest(`cards/${card}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  updateUserAvatar(url) {
    return this._fetchRequest('users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    });
  }
}

const api = new Api(apiConfig);

export default api;