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
}

const catagory = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`
    const res = await fetch(url)
    const data = await res.json()
    displayCatagory(data.data)
}
const displayCatagory = (par) => {
    const categoryContainer = document.getElementById("category-container")
    categoryContainer.innerHTML = ''
    par.forEach(news => {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="row g-4  rounded-1">
            <div class="col-md-4 mb-5">
                <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.slice(0, 200)}</p>
                </div>
                <div class="d-flex justify-content-around align-items-center">
                    <div class="d-flex align-items-center flex-wrap">
                        <img src="${news.author.img}" id="author" alt="...">
                        <div clss="d-flex align-items-center flex-wrap">
                            <h5>${news.author.name}</h5>
                            <p>${news.author.published_date}</p>
                        </div>
                    </div>
                    <div class="fs-4 d-flex align-items-center">
                        <i class="fa text-xl">&#xf06e;</i>
                        <p class="mx-3">${news.total_view}</p>
                    </div>
                    <div class="d-flex align-items-center fs-4 ">
                        <div class="text-warning">
                            <i class="fa-regular fa fa-star text-2xl checked"></i>
                            <i class="fa-regular fa fa-star text-2xl text-gray-400"></i>
                            <i class="fa-regular fa fa-star text-2xl text-gray-400"></i>
                            <i class="fa-regular fa fa-star text-2xl text-gray-400"></i>
                            <i class="fa-regular fa fa-star text-2xl text-gray-400"></i>
                        </div>
                        <h5 >${news.rating.number}</h5>
                    </div>
                    <div>
                        <button type="button" onclick="showModel('${news.author.name}', '${news.author.img}','${news.rating.number}', '${news.title}')" class="btn btn-primary fs-4" data-bs-toggle="modal" data-bs-target="#newsDetaileModal"> &#8594;</button>
                    </div>
                </div>
            </div>
        </div>
    `
        categoryContainer.appendChild(div)
    });
}
const showModel = (name, img, number, title) => {
    const modalBody = document.getElementById("modal-container")
    modalBody.innerHTML=`
        <img id="image-modal" src="${img}">
         <p>${name}</p> 
        <p>${number}</p> 
        <p>${title}</p> 
    `
    // modalBody.appendChild(p)
}
displayAllData()

