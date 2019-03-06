function printStairs(n) { 
    let newStair = ``;
    let i = 0;
    do {
        newStair+=`#`;
        console.log(newStair);
        i++;
    } while (i<n);
    return newStair;

}
printStairs(3);//Write your number
//////////////////////////////////


////done with classes////////////
class Print{
    constructor(number){
        this.newstair = ``
        this.number = number;
        this.index = 0;
    }
    print_stairs(){
        do{
            this.newstair+=`#`;
            console.log(this.newstair);
            this.index++;
        } while (this.index<this.number) {
        return this.newstair;    
        }

    }
}

let print_smth = new Print(3);
print_smth.print_stairs();
////done with classes/////////////
