console.log('WarsawJS Hotline™ -- by WarsawJS')

let url = '';
url = 'http://192.168.0.122:8081'
url = 'https://warsawjs.github.io/dist'
fetch(url + '/hotline.html').then(async r => {
  const html = await r.text()
  window.hothtml.innerHTML = html.replace(/\/dist/g, url);
})

// <div class="nav-item text-center my-5">

window.content.innerHTML = `
<div class="container">
  <div class="my-5">
    <h2>
    WarsawJS Hotline™
    </h2>
    <div id="hothtml"></div>
  </div>
</div>
`;

// alert(314);
