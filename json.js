const berita = document.querySelector(".berita");

fetch(
  `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2Findex.php%2Fdetikcom_nasional`
)
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    if (responseJson.error) {
      showResponseMessage(responseJson.message);
    } else {
      items = responseJson.items;
      console.log(responseJson);
      let content = ``;
      for (let i = 0; i < items.length; i++) {
        content += `
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
      berita.innerHTML = content;
    }
  })
  .catch((error) => {
    showResponseMessage(error);
  });
