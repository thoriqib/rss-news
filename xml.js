const RSS_URL = `http://rss.detik.com/index.php/detikcom_nasional`;

fetch(RSS_URL)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    console.log(data);
    const items = data.querySelectorAll("item");
    console.log(items);
    let html = ``;
    items.forEach((el) => {
      let title = el.querySelector("title").textContent;
      let link = el.querySelector("link").textContent;
      let description = el.querySelector("description").textContent;
      let date = el.querySelector("pubDate").textContent;
      html += `
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
    console.log(html);
    document.querySelector(".berita").innerHTML = html;
  });
