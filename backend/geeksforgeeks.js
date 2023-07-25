import puppeteer from "puppeteer"

const geekforgeeks = async() => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://practice.geeksforgeeks.org/problem-of-the-day")

  const ref = await page.evaluate(() => {
    links = Array.from(document.querySelectorAll(".problemOfTheDay_potd_banner__0FA1E .problemOfTheDay_problem__gqINx .problemOfTheDay_problemContainer__BmMDm div a")).slice(0, 1).map(x => x.getAttribute('href'))
    return links[0];
  })
  // console.log(ref);

  const heading = ref.slice(44, ref.length - 2).split('-');
  var title = "";
  for (var i = 0; i < heading.length; i++) {
    title += heading[i].charAt(0).toUpperCase() + heading[i].slice(1);
    title += " ";
  }
  // console.log(title);

  await browser.close();
  return {ref, title};
}

// geekforgeeks();
export {geekforgeeks};