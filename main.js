import "./index.css";
import One from "./dummyImage/one.jpg";
import two from "./dummyImage/two.jpg";
import three from "./dummyImage/three.jpg";
import four from "./dummyImage/four.jpg";
const data = [One, two, three, four];

let value = 0;
let con = true;
document.getElementsByTagName("body")[0].addEventListener("click", () => {
  if (value < 3 && con) {
    ++value;
    document.querySelector("#app").innerHTML = `
    <div>
      <img src="${data[value]}" alt="defaultStatus"   />
    </div>
    `;
  } else if (value <= 3) {
    con = false;
    --value;
    document.querySelector("#app").innerHTML = `
    <div>
      <img src="${data[value]}" alt="defaultStatus"   />
    </div>
    `;
    if (value === 0) {
      con = true;
    }
  }
  console.log(value);
});

document.querySelector("#app").innerHTML = `
  <div>
    <img src="${data[0]}" alt="defaultStatus"   />
  </div>
`;
