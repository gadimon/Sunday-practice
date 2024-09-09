//שאלה 1
function getDirection(num, bool)
{
     let temp = "-"
    if(bool){

        console.log("<" + temp.repeat(num));
    } else {
        let temp = "-"
        console.log(temp.repeat(num) +  ">");
    }
}
getDirection(4, false)
//שאלה 3
function getNum(num)
{
    let n = num;
    for (let i = 1; i <= n; i++) {
        let str = "* ";
        console.log(str.repeat(i));
}
}
getNum(4)
//שאלה 4
function getInvertedTriangle(num)
{
    let n = num;
    for (let i = n; i >= 1; i--) {
        let str = "* ";
        let space  = '  ';
        console.log(space.repeat(n-i)+str.repeat(i));
}
}
getInvertedTriangle(4)

//שאלה 5
function multiplicationTable(num)
{
    let result = '\n';
for (let i = 1; i < num; i++) {
    for (let j = 1; j < num; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
    console.log(result);
    
}
}
multiplicationTable()

//שאלה 6
function reverseANumber(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}
console.log(Number(reverseANumber(32243)));

//שאלה 7
function getString(str)
{
    if(str == null) {
        console.log(str);
    }

    for(let i = 0; i < str.length; i++)
    {            
        if(str[i]  == " ")
           console.log("  ") 
        else(
            console.log(str.trim())
        )  
    }
};
getString("  gadi")

//שאלה 8
let list1 = [1, 2, 3, 4]
let list2 = [5, 6, 7, 8]

function lists(list1, list2) {
    let sumList2 = 0;
  
    for (let i = 0; i < list2.length; i++) {
      sumList2 += list2[i];
    }
  
    let list3 = [];
    
    for (let i = 0; i < list1.length; i++) {
      let multiplyList1 = 1;
  
      for (let j = 0; j < list1.length; j++) {
        if (j !== i) {
            multiplyList1 *= list1[j];
        }
      }
  
      list3.push(multiplyList1 * sumList2);
    }
  
    return list3;
  }
  
  console.log(lists(list1, list2)); 
  


