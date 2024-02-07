const dataLode = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    return data.data;
}
// display data 
const displayAllData = async () => {
    const data = await dataLode();
    const allCategoryManu = document.getElementById("allCategoryManu")

    for (const categorie of data.news_category) {
        // console.log(categorie)
        const div = document.createElement("div")
        div.classList.add("list-group-item")
        div.innerHTML = `
        <button onclick="catagory(${categorie.category_id})" class="fs-4 rounded-1" style="border-style: none" >${categorie.category_name}</button>
        `
        allCategoryManu.appendChild(div)
    }
};

