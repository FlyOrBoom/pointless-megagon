let megagon = Array(2e6) 
const tau = 2*Math.PI
for(let i = 0; i<1e6; i++){
	theta = i*tau/1e6
	megagon[2*i] = Math.cos(theta).toFixed(12)
	megagon[2*i+1] = Math.sin(theta).toFixed(12)
}
console.log(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='-1.2 -1.2 2.4 2.4' width='500' height='500'><polygon points='${megagon.join(' ')}' fill='white' stroke='black' stroke-width='0.05'/></svg>`)


