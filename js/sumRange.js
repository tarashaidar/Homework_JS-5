function sumRange(start, end) { 
    sum = 0; 
    while ( start <= end ) {
        sum += start; 
        start++;
        
    }
    if (start=end) {
        console.log(sum)
    }
    return sum;
    
 }

 sumRange(2, 4) // 9  // Write a range
 sumRange(-1, 3) // 5 



 ////done with classes////////////
class Range{
    constructor(start, end){
        this.start = start;
        this.end = end;
        this.sum = 0;
    }

    sum_range(){
        while ( this.start <= this.end ) {
            this.sum += this.start; 
            this.start++;
            
        }
        if (this.start = this.end) {
            console.log(this.sum)
        }
        return this.sum;
    }
}

let sum_cl = new Range(2, 4);
sum_cl.sum_range();
////done with classes/////////////
 
