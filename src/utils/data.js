export const DATA = {
    data: []
}

fetch(`https://course-api.com/react-store-products`).then(async (res) => {
  DATA.data = await res.json();
})
console.log(DATA.data)