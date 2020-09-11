const URL = [
  `http://rss.detik.com/index.php/detikcom_nasional`,
  `https://rss.detik.com/index.php/finance`,
  `https://www.vice.com/id_id/rss`,
];

const fetchData = (link) => {
  fetch(link)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      const items = data.querySelectorAll("item");
      document.querySelector(".berita").innerHTML += showData(items);
    });
};

const showData = (items) => {
  let html = ``;
  items.forEach((el) => {
    let title = el.querySelector("title").textContent;
    let link = el.querySelector("link").textContent;
    let description = el.querySelector("description").textContent;
    let date = el.querySelector("pubDate").textContent;
    html += /*html*/ `
            <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
              <p class="card-text">${description}</p>
              <a href="${link}" class="card-link">Detail Berita</a>
            </div>
          </div>
          `;
  });
  return html;
};

URL.forEach(link => {
  fetchData(link);
});
