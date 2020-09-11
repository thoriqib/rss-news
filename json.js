const URL = [
  `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2Findex.php%2Fdetikcom_nasional`,
  `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.detik.com%2Findex.php%2Ffinance`,
  `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.vice.com%2Fid_id%2Frss`,
];

const fetchData = (link) => {
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        items = responseJson.items;
        document.querySelector(".berita").innerHTML += showData(items);
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

const showData = (items) => {
  let content = ``;
  for (let i = 0; i < items.length; i++) {
    content += /*html*/ `
              <div class="card m-3 " style="width: 18rem;">
                <img src="${items[i].enclosure.link}" class="card-img-top" alt="Berita">
                <div class="card-body">
                    <h5 class="card-title">${items[i].title}</h5>
                    <p class="card-text">${items[i].description}</p>
                    <a href="${items[i].link}" class="btn btn-primary">Detail berita</a>
                </div>
              </div>
          `;
  }
  return content;
};

URL.forEach((link) => {
  fetchData(link);
});
