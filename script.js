let sum=0
function flowerprice(target){
    const name=document.getElementById('flower')
    const flowername =target.parentNode.childNodes[1].innerText
    const h3=document.createElement('h3')
    h3.innerText=flowername
    name.appendChild(h3)
    //console.log(name)
   const value= target.parentNode.childNodes[5].innerText.split(' ')[1]
    sum=parseInt(sum)+parseInt(value)
    console.log(sum)
    const totalvalue= document.getElementById('total')
    totalvalue.innerText=sum
    const discount=document.getElementById('discount')
    if( sum > 160 ){
        discount.innerText='you got a 20% discount'
    } else{
        discount.innerText='not discount avalaible'
    }

    const discountamount=document.getElementById('disamount')
    const h2=document.createElement('h2')
    discountamount.appendChild(h2)
    if(sum>160){
        discountamount.innerText= 'discount amount '+(sum*(20/100))
    }
    

    const grandtotal=document.getElementById('grand')
    grandtotal.innerText=sum
    if(sum>160){
        grandtotal.innerText=sum-(20/100*sum)
    
    }else{
        grandtotal.innerText=sum
    }

    


   

}