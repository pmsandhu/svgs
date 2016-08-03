const progressUpdate= ()=> {
  let inputVal = document.getElementById('input').value
  let circle = document.getElementsByTagName('circle')[1]
  let stroke = 565.48*((100-inputVal)/100)
  circle.setAttribute('stroke-dashoffset', stroke)
}