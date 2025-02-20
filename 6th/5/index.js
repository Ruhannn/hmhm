const loadPhones = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  console.log(data);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  const showAllContainers = document.getElementById("showAllContainer");
  phoneContainer.textContent = " ";
  if (phones.length > 12) {
    showAllContainers.classList.remove("hidden");
  } else {
    showAllContainers.classList.add("hidden");
  }
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `
      <figure><img src="${phone.image}" alt="${phone.name}" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.brand}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
  toggleLoading(false);
};

const handleSearch = () => {
  toggleLoading(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText);
};
const handleSearch2 = () => {
  toggleLoading(true);
  const searchField = document.getElementById("search-field2");
  const searchText = searchField.value;
  loadPhones(searchText);
};
const toggleLoading = (isLoading) => {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("hidden");
  } else{
    spinner.classList.add("hidden");
  }
};

