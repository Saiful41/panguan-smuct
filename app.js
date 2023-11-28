const product = [
    {
        id: 0,
        image:'images/image 11.png',
        title:'Men Yellow Jacket',
        price:120,
    },
    {
        id: 1,
        image:'images/toppng 1.png',
        title:'Men Black Jacket',
        price:110,
    },
    {
        id: 2,
        image:'images/vippng 1.png',
        title:'Men Lather Jacket',
        price:130,
    },
    {
        id: 3,
        image:'images/image 15.png',
        title:'Woman lather Jacket',
        price:120,
    },
    {
        id: 4,
        image:'images/SeekPng 1.png',
        title:'Woman Yellow Jacket',
        price:125,
    },
    {
        id: 5,
        image:'images/Mask Group.png',
        title:'Woman Black Jacket',
        price:150,
    },

];
const categories = [...new Set(product.map((item)=>
    
     {return item}))]

    document.getElementById('searchBar').addEventListener('keyup',(e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=>{
            return(
               item.title.toLocaleLowerCase().includes(searchData)
            )
        })
        displayItem(filterData);
    })

    const displayItem =(items) =>{
        let i = 0;
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image,title,price} =item;
            return(
                `
                <div class ='box'>
                <div class='img-box'>
                    <img class='images' src='${image}'></img>
                 </div>
                 <div class='bottom'>
                 <p>${title}</p>
                 <h2>${price}.00</h2>`+
                 "<button onclick ='addtocart("+(i++)+")'>Add to cart </button>"+
                 `</div>
                </div>`
            )
        }).join('');
    };
    displayItem(categories);

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displayCart();
    }

    function delElement(a){
        cart.splice(a,1);
        displayCart();
    }


    function displayCart(a){
        let j =0, total = 0;
        document.getElementById('count').innerHTML = cart.length;
        if (cart.length==0){
            document.getElementById('cart-itm').innerHTML ="Your Cart is Empty";
            document.getElementById('total').innerHTML ="$ "+0+".00";
        }
        else{
            document.getElementById('cart-itm').innerHTML= cart.map((items) =>
            {
                var {image,title,price} = items;
                total = total+price;
                document.getElementById('total').innerHTML = "$ "+total+".00";
                return(
                    `<div class='cart-itm'>
                    <div class='row-img'>
                     <img class='rowimg' src='${image}'>
                    </div>
                    <p style ='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>${price}.00</h2>`+ 
                   "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></i></div>"
                );
            }).join('');
        }
    }
    const orderSection = document.getElementById('order-section');
    document.getElementById('order-button').addEventListener('click', function(){
        const p =document.createElement('p');
        p.innerText ='Order Succesfully !!';
        orderSection.appendChild(p);
        p.style.color='green'

      
        document.getElementById('order-button').style.display='none'
    })