var products = []

$(document).ready(function() {
    console.log("Welcome To The Cellular Kingdom!!")
    // load data
    $.ajax({
        url: "data.json",
    }).done(function (data) {
        //$(this).addClass("done");
        
        for(let d in data) {
            products.push(data[d])
        }
    });
});    

function loadData() {
    let allRows = ""
    let totalDiscount = 0
    let total = 0

    var uniqueProducts = [];
    for (let p in products) {
        let isDuplicate = false;
        for (let up in uniqueProducts) {
            if (products[p].item === uniqueProducts[up].item && products[p].ppu === uniqueProducts[up].ppu) {
                uniqueProducts[up].discount = parseInt(uniqueProducts[up].discount) + parseInt(products[p].discount)
                uniqueProducts[up].quantity = parseInt(uniqueProducts[up].quantity) + parseInt(products[p].quantity);
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueProducts.push(products[p]);
        }
    }

    products = uniqueProducts;
    console.log(products)
    for (let p in products) {
        let cellDelete = `<td style="text-align: center;"><img style="width: 1.5em;" src='delete.png' onclick='deleteProduct("${p}")'></td>`
        let cellQuantity = '<td style="text-align: right;">' + products[p].quantity + "</td>"
        let cellItem = '<td style="text-align: left;">' + products[p].item + "</td>"
        let cellPPU = '<td style="text-align: right;">' + products[p].ppu + "</td>"
        let cellDiscount = '<td style="text-align: right;">' + products[p].discount + "</td>"

        let amount = (products[p].ppu * products[p].quantity) - products[p].discount
        totalDiscount += parseInt(products[p].discount)
        total += amount
        let cellAmount = '<td style="text-align: right;">' + amount.toLocaleString("en-US") + "</td>"
        let row = `<tr>${cellDelete}${cellQuantity}${cellItem}${cellPPU}${cellDiscount}${cellAmount}</tr>`
        allRows += row
    } 
    $('#tableBody').html(allRows)
    $("#total_discount").html(totalDiscount.toLocaleString("en-US"))
    $("#total").html(total.toLocaleString("en-US"))

    let vat = total * 0.07
    let net = total + vat
    $("#vat").html((vat.toLocaleString("en-US")))
    $("#net").html((net.toLocaleString("en-US")))
}

function addProduct() {
    let newName = (document.getElementById("exampleFormControlInput1")).value
    console.log(newName)

    let newProduct = {
        item: $('#exampleFormControlInput1 option:selected').text(),
        ppu: $('#exampleFormControlInput2').val(),
        quantity: $('#exampleFormControlInput3').val(),
        discount: $('#exampleFormControlInput4').val()
    }

    if (newProduct.ppu < 0) {
        newProduct.ppu = 0
    }
    if (newProduct.quantity < 0) {
        newProduct.quantity = 0
    }
    if (newProduct.discount < 0) {
        newProduct.discount = 0
    }
    if (newProduct.ppu == 0 || newProduct.quantity == 0) {
        newProduct.discount = 0
    }

    $('#tableBody').html("")

    products.push(newProduct)
    loadData()
}

function deleteProduct(index) {
    console.log("Delete " + index)
    delete products[index]

    $('#tableBody').html("")
    loadData()
}

function clearData() {
    if (!confirm("Are you sure you want to remove all the item in your cart? This action can't be undone")) {
        return;
      }
    $('#tableBody').html("")
    for (let p in products) {
        delete products[p]
    }
    console.log("Data CLeared")

    $("#total_discount").html(0)
    $("#total").html(0)
    $("#vat").html(0)
    $("#net").html(0)
}
