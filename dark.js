let darkmode=localStorage.getItem('darkmode')
const theme=document.getElementById('mode')

const  enabledarkmode=()=>{
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode','active')
}
const  disabledarkmode=()=>{
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode',null)
}
if (darkmode=="active") enabledarkmode()

theme.addEventListener("click",()=>{
  darkmode=localStorage.getItem('darkmode')
  if (darkmode!="active"){
    enabledarkmode()
  }
  else{
    disabledarkmode()
  }
}
)
