function people(n) {
  top:for (var m=n-1,a=1,b;;a++) {
    b=a*n*n+1;if (b%m) continue
    for (var i=2;i<n;i++) {
      b=b/m*n+1;if (b%m) continue top
    }
    return b/m*n+1
  }
}

console.log(people(3));
