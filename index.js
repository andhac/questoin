
let url = "https://kontests.net/api/v1/all";
let responses = fetch(url)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    ihtml = " ";
    // console.log(value)
    for (item of value) {
      const startTime = formatDate(item.start_time);
      const endTime = formatDate(item.end_time);

      ihtml += ` <div class="card" style="width: 22rem ;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Start Time </b>${startTime}</p>
                <p class="card-text"><b>End Time </b>${endTime}</p>
                <a href="${item.url}" class="btn edit ">visit Here</a>
                </div>
            </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });

function formatDate(dateString) {
  const originalDate = new Date(dateString);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[originalDate.getMonth()];
  const formattedDate = `${originalDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${monthName}/${originalDate.getFullYear()}`;
  return formattedDate;
}

