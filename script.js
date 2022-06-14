//Unsplash
const access_key = 'ESDjSj2JEgvd-Fhuolf4mGHaIagjWFVWZpTh8dLNp20';
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=12`;
// ------------------------


const gallery = document.querySelector('.gallery');
const img = document.querySelector('img')


let allImages;

const getImages = () => {
  fetch(random_photo_url)
  .then(res => res.json())
  .then(data => {
      allImages = data;
      makeImages(allImages);
  });
}

const makeImages = (data) => {
  data.forEach((item, index) => {

      let img = document.createElement('img');
      let itemDiv = document.createElement('div');
      let h2 = document.createElement('h2');
      let a = document.createElement('a');
      const text = document.createTextNode('Photographer');
      img.src = item.urls.regular;
    

      gallery.appendChild(itemDiv);
      itemDiv.className = 'item';
      itemDiv.appendChild(a);
      a.appendChild(img);
      a.appendChild(h2);
      h2.appendChild(text);

  })
}

getImages();


// from WEB CIFAR photo gallery app with Pexels api


// class PhotoGallery {
//   constructor(){
//     this.const API_KEY = '563492ad6f91700001000001d3ca7f29ab864204b469f627296ea28a';
//     this.galleryDiv = document.querySelector('.gallery');
//     this.searchForm = document.querySelector('form');
//     this.loadMore = document.querySelector('.load-more');
//   }
//   eventHandle(){
//     document.addEventListener('DOMContentLoaded', ()=>{
//       this.getImg();
//     });
//   }

//   getImg(){
//     const baseUrl ='"https://api.pexels.com/v1/curated?per_page=1"';
//     const responses = fetch(baseUrl, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         Authorization: this.API_KEY
//       }
//     })
//   }
// }