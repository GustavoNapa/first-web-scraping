const puppeteer = require('puppeteer');
// const html2canvas = require('html2canvas');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

//   https://carbon.now.sh/?bg=rgba%2874%2C144%2C226%2C1%29&t=monokai&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520default%2520function%2520gustavo%28vida%29%257B%250A%2520%2520if%28vida%2520%253D%253D%2520true%29%2520return%2520word%253B%250A%257D
  const base_URI = 'https://carbon.now.sh/?';
  const bg = '&bg=' + 'rgba(74,144,226,1)';
  const t = '&t=' + 'monokai';
  const l = '&l=' + 'javascript';
  const fm = '&fm=' + 'Fira+Code'
  
  const code = '&code=' + 'export default function gustavo(vida) \n \tif(vida) == true) \n\t\treturn word;'

  const URL_COMPLETA = base_URI+bg+t+code+l+fm;

  console.log("Codificando a URL: " + URL_COMPLETA)
  const encodedURL = await encodeURI(URL_COMPLETA);

  console.log("Indo para a url: "+encodedURL);
  await page.goto(encodedURL);
  
//   const container = await page.evaluate( async () => {
//     //Essa função será executada no browser
//     //Vamos precisar acessar o DOM

//     //Preciso pegar gerar uma imagem com o campo imprimivel
//     // id = 'export-container'

//     const exportContainer = await document.querySelector('#export-container');

//     // const container = [...exportContainer];

//     return exportContainer.innerHTML;

//   });

  await page.waitForSelector('#export-container');

  const element = await page.$('#export-container'); 

  await element.screenshot({path: 'google1.png'});

  console.log("Ta salvo");

  await browser.close();
})();