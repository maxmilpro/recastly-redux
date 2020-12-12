// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };

var searchYouTube = ({key, query, max = 5}, callback) => {
  var data = {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  };

  var URL = 'https://www.googleapis.com/youtube/v3/search';

  URL += '?' + Object.keys(data).map((k) => k + '=' + encodeURIComponent(data[k])).join('&');

  fetch(URL
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }).then((response) => response.json()
  ).then(({items}) => callback(items));
};

export default searchYouTube;
