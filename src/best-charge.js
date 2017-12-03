'use strict';
const itemInfo=require("./items.js").loadAllItems;
const onSale=require("./promotions.js").loadPromotions;

function bestCharge(selectedItems) {
  let list=array(selectedItems);
  let infoArray=allInfo(list);
  let str=printInfo(infoArray);
  console.log(str);

}

function array(selectedItems) {
  let list={};
  for (let str of selectedItems){
    list[str.substring(0,8)]=parseInt(str.substring(11));
  }
 // console.log(list);
 return list;
}

function allInfo(list) {

  for(let good in list){
    let goodInfo={};
    let index=itemInfo.map(i=>i.id).indexOf(good);
    let type2=onSale[1].items.indexOf(good);
    goodInfo.name=itemInfo[index].name;
    goodInfo.price=itemInfo[index].price;
    goodInfo.cnt=list[good];

  }

  console.log(goodInfo);


}

const r1=["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
const r2=["ITEM0013 x 4", "ITEM0022 x 1"];
const r3=["ITEM0013 x 4"];

bestCharge(r1);
bestCharge(r2);
bestCharge(r3);


module.exports =bestCharge;

