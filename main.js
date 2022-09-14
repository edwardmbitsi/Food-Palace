// active navbar link  
 const sections = document.querySelectorAll(".section");  
 window.addEventListener("scroll", function (event) {  
  sections.forEach((section) => {  
   let top = window.scrollY + 250;  
   let offset = section.offsetTop;  
   let height = section.offsetHeight;  
   let id = section.getAttribute("id");  
   if (top >= offset && top < offset + height) {  
    document.querySelectorAll(".active").forEach((a) => {  
     a.classList.remove("active");  
    });  
    document.querySelector("[href*=" + id + "]").classList.add("active");  
   }  
  });  
 });  
 const food=[  
   {  
     id:1,  
     name:"BURGER",  
     img:"https://wallpapercave.com/wp/wp3151363.jpg",  
     price:3,  
     cateogary:"FASTFOOD",  
   },  
   {  
     id:2,  
     name:"CHEESE BURGER",  
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Cw7DLr9RY9FnQBQn7WS5J-1un-895x5pQg&usqp=CAU",  
     price:4,  
     cateogary:"FASTFOOD",  
   },{  
     id:3,  
     name:"FRENCH FRIES",  
     img:"https://image.freepik.com/free-photo/front-view-tasty-ham-sandwiches-with-french-fries-dark-surface_179666-34646.jpg",  
     price:2.8,  
     cateogary:"FASTFOOD",  
   },{  
     id:4,  
     name:"GITHERI",  
     img:"https://i.pinimg.com/originals/46/57/7e/46577ea92c00ea89532dd7e375ad8c29.jpg",  
     price:7,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:5,  
     name:"RICE",  
     img:"https://image.freepik.com/free-photo/cooked-plain-white-basmati-rice-steamed-rice-bowl_466689-74933.jpg",  
     price:5,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:6,  
     name:"PLAIN CHAPATI",  
     img:"https://image.freepik.com/free-photo/chapati-tanturi-roti_57665-1758.jpg",  
     price:1,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:7,  
     name:"FRUIT SALAD",  
     img:"https://image.freepik.com/free-photo/fresh-fruit-berry-salad-healthy-eating_114579-20466.jpg",  
     price:1.5,  
     cateogary:"BREAKFAST",  
   },{  
     id:8,  
     name:"SALAD",  
     img:"https://image.freepik.com/free-photo/greek-salad-with-fresh-tomato-cucumber-red-onion-basil-feta-cheese-black-olives-italian-herbs_2829-4480.jpg",  
     price:1.5,  
     cateogary:"LUNCH/DINNER"  
   },{  
     id:9,  
     name:"MUKIMO",  
     img:"https://thumbs.dreamstime.com/b/mukimo-kenya-cuisine-meat-stew-chapatis-white-background-top-view-no-people-vertical-high-quality-photo-204693841.jpg",  
     price:7,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:9,  
     name:"MATOKE",  
     img:"https://cheflolaskitchen.com/wp-content/uploads/2021/12/DSC_1575-matoke-683x1024.jpg.webp",  
     price:8,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:10,  
     name:"OMENA",  
     img:"https://i.pinimg.com/originals/44/89/c0/4489c017c7ea1985585b2f4a6ca9cbbd.jpg",  
     price:6,  
     cateogary:"LUNCH/DINNER"  
   },{  
     id:11,  
     name:"SUKUMA WIKI",  
     img:"https://africanbites.com/wp-content/uploads/2015/01/IMG_6424.jpg",  
     price:7,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:12,  
     name:"MUTURA",  
     img:"https://pbs.twimg.com/media/EnrJq5mWMAEmbF8.jpg",  
     price:"5",  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:13,  
     name:"VIAZI KARAI",  
     img:"https://1.bp.blogspot.com/-jvov5F-uAFc/XYtSA74RZMI/AAAAAAAA4gI/D0WAQrbr3oIn1O9ZtFCX3UV1r0idMobcACLcBGAsYHQ/s1600/20190925_134200-01.jpeg",  
     price:3,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:14,  
     name:"SAMOSA",  
     img:"https://littlespicejar.com/wp-content/uploads/2022/04/My-Moms-Beef-Samosa-10-735x1103.jpg",  
     price:2.4,  
     cateogary:"LUNCH/DINNER",  
   },{  
     id:15,  
     name:"NYAMA CHOMA",  
     img:"https://www.internationalcuisine.com/wp-content/uploads/2016/03/Kenyan-Nyama-Choma-600x899-1.jpg",  
     price:4,  
     cateogary:"LUNCH/DINNER"  
   },{  
     id:16,  
     name:"UGALI",  
     img:"https://www.tanias.rw/wp-content/uploads/2020/09/IMG_9702-rotated.jpg",  
     price:7,  
     cateogary:"LUNCH/DINNER",  
   },  
   {id:17,  
     name:"PIZZA",  
     img:"https://image.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",  
     price:4,  
     cateogary:"FASTFOOD",  
   },  
   {id:18,  
     name:"CHEESY CORN PIZZA",  
     img:"https://image.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg",  
     price:5,  
     cateogary:"FASTFOOD",  
   },{id:19,  
     name:"VEG FRIED RICE",  
     img:"https://image.freepik.com/free-photo/vegetarian-hyderabadi-dum-biryani-ramadan-food_158388-2268.jpg",  
     price:5,  
     cateogary:"FASTFOOD",  
   },{id:20,  
     name:"TACO",  
     img:"https://img.freepik.com/free-photo/concept-tasty-food-with-taco-close-up_185193-71696.jpg?w=360&t=st=1663180339~exp=1663180939~hmac=6948e41c623e53998e0b1f9a3170dddf44d789050449ebf61f70ace04b3d7988",  
     price:5,  
     cateogary:"FASTFOOD",  
   },  
   {id:21,  
     name:"HOT DOG",  
     img:"https://img.freepik.com/free-photo/top-view-two-tasty-hot-dogs-with-tomato-sauce_23-2147684584.jpg?w=360&t=st=1663180542~exp=1663181142~hmac=feb7ed304e8a06bcff8a295bebbda5444df5bde473d4ea078ceb4535ed5d5e8f",  
     price:5,  
     cateogary:"FASTFOOD",  
   },  
   {id:22,  
     name:"ICE CREAM",  
     img:"https://img.freepik.com/free-photo/four-scoops-ice-cream_144627-8360.jpg?w=360&t=st=1663180792~exp=1663181392~hmac=abbda7282167b37c025aeacf9c11f7b9c35218a3df92e41a52c3f03fb689c591",  
     price:3,  
     cateogary:"FASTFOOD",  
   },{id:23,  
     name:"SANDWICH",  
     img:"https://www.jocooks.com/wp-content/uploads/2020/10/club-sandwich-1-9.jpg",  
     price:5,  
     cateogary:"FASTFOOD",  
   }  
   ,{id:24,  
     name:"AALOO PARATHA",  
     img:"https://static.toiimg.com/thumb/53109843.cms?imgsize=244340&width=800&height=800",  
     price:4,  
     cateogary:"BREAKFAST",  
   }  
   ,  
   {id:25,  
     name:"PYAZ PARATHA",  
     img:"https://cdn3.foodviva.com/static-content/food-images/roti-paratha-recipes/onion-paratha-recipe/onion-paratha-recipe.jpg",  
     price:4,  
     cateogary:"BREAKFAST",  
   }  
   ,{id:26,  
     name:"SATOO PARATHA",  
     img:"https://static.toiimg.com/thumb/54444357.cms?imgsize=128894&width=800&height=800",  
     price:4,  
     cateogary:"BREAKFAST",  
   }  
   ,{id:27,  
     name:"PLAIN PARATHA",  
     img:"https://indianvegrecipe.com/wp-content/uploads/2019/10/paratha-recipe.jpg",  
     price:3,  
     cateogary:"BREAKFAST",  
   }  
   ,{id:28,  
     name:"BREAD AND BUTTER",  
     img:"https://media.istockphoto.com/photos/bread-and-butter-picture-id463179229",  
     price:2,  
     cateogary:"BREAKFAST",  
   },{id:29,  
     name:"BREAD AND JAM",  
     img:"https://media.istockphoto.com/photos/strawberry-preserves-on-bread-picture-id525057795",  
     price:2,  
     cateogary:"BREAKFAST",  
   },  
   {id:30,  
     name:"BOILED EGGS",  
     img:"https://images.media-allrecipes.com/userphotos/9188544.jpg",  
     price:4,  
     cateogary:"BREAKFAST",  
   },  
   {id:31,  
     name:"EGG OMELATE",  
     img:"https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy-500x375.jpg",  
     price:5,  
     cateogary:"BREAKFAST",  
   },{id:32,  
     name:"TEA",  
     img:"https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/22/tea.jpg",  
     price:3,  
     cateogary:"DRINKS",  
   },{id:33,  
     name:"COFFEE",  
     img:"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",  
     price:3,  
     cateogary:"DRINKS",  
   },{id:34,  
     name:"COLD DRINK",  
     img:"https://cdn.cdnparenting.com/articles/2018/07/361921454-H.jpg",  
     price:5,  
     cateogary:"DRINKS",  
   },{id:35,  
     name:"SHAKES",  
     img:"https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/summer-of-shakes.jpg.jpeg?itok=OUDvbdfl",  
     price:4.5,  
     cateogary:"DRINKS",  
   },{id:36,  
     name:"COLD COFFEE",  
     img:"https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-cold-coffee-recipe.jpg",  
     price:3,  
     cateogary:"DRINKS",  
   },{id:37,  
     name:"NIMBU PAANI",  
     img:"https://simmertoslimmer.com/wp-content/uploads/2016/07/Nimbu-Pani.jpg",  
     price:2,  
     cateogary:"DRINKS",  
   },  
 ];  

 cateogaries=document.querySelector(".cateogaries");  
 container=document.querySelector(".container");  
 
window.addEventListener("DOMContentLoaded",function(){  
   filterMenu("ALL")  
   var cat=food.reduce(function(values,items){  
 if(!values.includes(items.cateogary)){  
   values.push(items.cateogary);  
 }  
 return values;  
   },["ALL"])  
   var catBtn=cat.map(function(item){  
     return`<a href="#" class="ctitle ${item}">${item}</a>`;  
   })  
    var catBtns=catBtn.join("")  
   cateogaries.innerHTML=catBtns;  
   var button=document.getElementsByClassName("ctitle")  
 for(var i=0;i<button.length;i++){  
     button[i].addEventListener("click",(e)=>{  
 var val=e.target.className.split(" ");  
 filterMenu(val[1])  
     })  
   }})  
function displayMenu(food){  
   var displayMenu=food.map(function(item){  
     return(  
       `<div class="items">  
       <div class="img-conatiner"><img src=${item.img}  
       alt="${item.title}" class="img"></div>   
        <div class="details">  
          <div class="title">${item.name}</div>  
          <div class="price">$${item.price}</div>  
         </div>  
       <div class="cateogary">${item.cateogary}</div>  
     </div>`)  
   })  
   displayMenu=displayMenu.join("");  
   container.innerHTML=displayMenu  
 }  
 var lists=food.reduce(function(values,items){  
   if(!values.includes(items.cateogary)){  
     values.push(items.cateogary);  
   }  
   return values;  
     },["ALL"]);  
 function filterMenu(cateogary){  
    var filter1=food.filter(function(item){  
 if(item.cateogary===cateogary){  
   return item;  
 }})  
 if(cateogary==="ALL"){  
   displayMenu(food);  
 }  
 else{  
   displayMenu(filter1);  
 }  
 }  
