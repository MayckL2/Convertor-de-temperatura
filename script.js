function result(){
  let dcel=document.querySelector("#dcel")
  let dfar=document.querySelector("#dfar")
  let dkel=document.querySelector("#dkel")
  
  let pcel=document.querySelector("#pcel")
  let pfar=document.querySelector("#pfar")
  let pkel=document.querySelector("#pkel")
  let mostra= ""
  let resultado= document.querySelector("#mostra")

  // faz os calculos das converções
  if (dcel.value != "" && pfar.checked){
    mostra= (parseInt(dcel.value)*1.8)+32
  }else if(dcel.value != "" && pkel.checked){
    mostra= parseInt(dcel.value) + 273
  }else if(dcel.value != "" && pcel != ""){
    mostra= "selecione tipos diferentes!"
  }else if (dfar.value != "" && pcel.checked){
    mostra= (parseInt(dfar.value)-32)/1.8
  }else if(dfar.value != "" && pkel.checked){
    mostra= (parseInt(dfar.value)-32)*(5/9)+273
  }else if(dfar.value != "" && pfar != ""){
    mostra= "selecione tipos diferentes!"
  }else if (dkel.value != "" && pfar.checked){
    mostra= ((parseInt(dkel.value)-273)*1.8)+32
  }else if(dkel.value != "" && pcel.checked){
    mostra= parseInt(dkel.value) - 273
  }else if(dkel.value != "" && pkel != ""){
    mostra= "selecione tipos diferentes!"
  }
  
  // se escrever em varios lugares ao mesmo tempo
  if(dcel.value != "" && dfar.value != "" || dkel.value != ""){
    mostra= "escreve em apenas um lugar"
  }

// exibe na tela os valores
  if(typeof mostra == "string"){
    resultado.innerHTML= mostra
  }else{
    resultado.innerHTML= Math.round(mostra) +"°"
  }
}
