function solution(a, b, c) {
   
        if(a === b && b === c && c === a){
           return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3))
        }
        else if(a !==b && b!==c && c!==a){
            return a+b+c
        } else if(a===b && a!==c || b===c && a!==b || c===a && a!==b){
            return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))            
        }    
}