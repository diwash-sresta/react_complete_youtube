function Random(){
  const number = Math.random()*100;

  return <h1 style={{color: "coral" , backgroundColor: "#3300FF"}}>
    Random Number : {Math.round(number)}
  </h1>
}
export default Random;