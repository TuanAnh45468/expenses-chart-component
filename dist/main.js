const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const maxBarHeight = 250;
const maxAmount = Math.max(...data.map((item) => item.amount));
const scalingFactor = maxBarHeight / maxAmount;

const chartHTML = `
  <div class="flex justify-between">
    ${data
      .map(
        (item) => `
      <div class="flex flex-col justify-end bar">
        <div class="rounded-sm relative duration-300 ease-in-out bg-soft-red w-[35px] hover:bg-cyan" style="height:${
          item.amount * scalingFactor
        }px">
        <div class="rounded-sm number text-center absolute top-[-27px] left-[-8px] text-sm font-bold h-30 w-[48px] bg-dark-brown text-very-pale-orange">${
          item.amount
        }</div>
</div>
        <div class="text-medium-brown">${item.day}</div>
      </div>
    `
      )
      .join("")}
  </div>
`;

const chartContainer = document.getElementById("chart-container");
chartContainer.innerHTML = chartHTML;
const bars = document.querySelectorAll(".bar");
bars.forEach((bar) => {
  bar.addEventListener("mouseover", (event) => {
    const number = event.target.querySelector(".number");
    if (number) {
      number.style.visibility = "visible";
    }
  });

  bar.addEventListener("mouseout", (event) => {
    const number = event.target.querySelector(".number");
    if (number) {
      number.style.visibility = "hidden";
    }
  });
});
