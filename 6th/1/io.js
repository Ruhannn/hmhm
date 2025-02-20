let data ={
  shopia:{
    id:13,
    study:[
      {
        primary:
        [
          { schoolName:"abc schoool"},
          { location:"dhatka"}
        ]
       },      {
        secondary:
        [
          { schoolName:"909-909k,nm"},
          { location:"report"}
        ]
       }
]
  }
}
console.log(data.shopia.study[1].secondary[1].location);