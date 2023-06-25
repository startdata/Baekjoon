function solution(a, b, c) {
   const set = new Set([a,b,c]).size
       if(set ===1 ){
            return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3))     
       } else if(set ===2){
           return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))   
       } else if(set ===3) {
           return a+b+c     
       }
            
}
