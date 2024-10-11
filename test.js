function correctWord(a){
    if (a % 10 ===1){
        console.log(a,"компьютер");}
    else if (a % 10 === 2 || 3 || 4){
        console.log(a,"компьютера") }
    else {
         console.log(a,"компьютеров");}
}
let a=correctWord(Number(prompt()));




function correcDiapason(x,y){
    let array=[];
    for (let i = x; i < y+1; i++) {
     array.push(i)
    }
    return array;}



function del(...arr) {
    let max=Math.max(...arr);
    let d=[];
    for (let i =2; i<=max; i++){
         if (arr.every(ar=> ar % i === 0))
             d.push(i);
    }
        return d;
    }

    def matrix(a):
    for item in range(1,a+1):
        for i in range (1,a+1):
            print(item*i,end=' ');
        print()
print(matrix(5))

