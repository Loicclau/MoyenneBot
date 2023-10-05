const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async ()=> {
    const browser = await puppeteer.launch({headless: 'new'}); //false  new = true language mis a jour
    const page = await browser.newPage();

    await page.goto('https://cas.monbureaunumerique.fr/login')
    await sleep(500);
    await page.click('.form__label');
    await sleep(500);
    await page.click('#button-submit');
    await sleep(500);
    await page.click('#bouton_eleve');
    await sleep(500);
    await page.type('#username','yourIdentifier'); // Ligne a modifier
    await page.type('#password','yourPasswords');  // Ligne a modifier
    await sleep(300);
    await page.click('#bouton_valider');

    await sleep(500);

    await page.$$eval('a', (links, text) => {
        for (let link of links) {
          if (link.innerText === text) {
            link.click();
            break;
          }
        }
      }, 'Nom de votre etablisement'); // Ligne a modifier
    await sleep(600);

    await page.click('.burger');
    await sleep(600);

    await page.$$eval('a', (links, text) => {
        for (let link of links) {
          if (link.innerText === text) {
            link.click();
            break;
          }
        }
      }, 'Évaluations');
    await sleep(500);
    await page.click('#yui-dt0-th-nombreDevoirComptabilises-liner');
    await sleep(300);
    await page.click('#yui-dt0-th-nombreDevoirComptabilises-liner');
    await sleep(300);
    const valeurElement = await page.$('div.yui-dt-liner.bulletin-note.bulletin-note-eleve');
    // Obtenez le texte de l'élément
    const valeur = await page.evaluate(element => element.textContent, valeurElement);
    
    //let moyenne = valeur.substring(0, 20);
    console.log('Votre moyenne générale est de', valeur);

   await browser.close();

   const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Appuyez sur Entrée pour fermer la console...', () => {
      rl.close();
  })
      
})();