let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log(`QTY \t ITEM \t\t  TOTAL`);
for (let x of order) {
  if (x.itemName.length < 16) {
    console.log(
      `${x.quantity} \t ${x.itemName} \t  ${(x.quantity * x.unitPrice).toFixed(
        2
      )}`
    );
  } else {
    console.log(
      `${x.quantity} \t ${x.itemName} ${(x.quantity * x.unitPrice).toFixed(2)}`
    );
  }
}

let totalValue = 0;

for (let x of order) {
  totalValue += (x.quantity * x.unitPrice);
}
console.log(`\nTotal: ${totalValue}`);