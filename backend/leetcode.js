import puppeteer from "puppeteer";

const leetcode = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://leetcode.com/problemset/all/");

  const date =  new Date();
  const today =  date.getDate();
  const prev = today - 1;

  const LC = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll(".grid .grid-cols-7 a ")).map(
      (x) => x.getAttribute("href")
    );
    return links;
  });

  await browser.close();

  const index = prev < LC.length ? prev : LC.length - 1;
  const ref = "https://leetcode.com" + LC[index] ;
  // console.log(ref);

  const heading = LC[index].slice(10, LC[index].length - 1).split('-');
  var title = "";
  for (var i = 0; i < heading.length; i++) {
    title += heading[i].charAt(0).toUpperCase() + heading[i].slice(1);
    title += " ";
  }
  // console.log(title);

  return {ref, title};
};
// leetcode();
export {leetcode};
