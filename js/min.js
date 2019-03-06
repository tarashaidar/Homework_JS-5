function min(a, b, c) {
    if (typeof a === 'string' || typeof b === 'string'|| typeof c === 'string') {
        return alert('Error');
    }
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    }
    else{
        console.log(c);
    }
 }

 min(10, 12, 11) // 10  //Write digitals
 min(3, 8, 4) // 3




  ////done with classes////////////
class Min{
    constructor(a, b, c){
        this.a = a; 
        this.b = b; 
        this.c = c; 
    }

    search_min(){
        if (typeof this.a === 'string' || typeof this.b === 'string'|| typeof this.c === 'string') {
            return alert('Error');
        }
        if (this.a < this.b && this.a < this.c) {
            console.log(this.a);
        } else if (this.b < this.a && this.b < this.c) {
            console.log(this.b);
        }
        else{
            console.log(this.c);
        }
    }
}

let min_value = new Min(1, 2, 3);
min_value.search_min();
////done with classes/////////////
