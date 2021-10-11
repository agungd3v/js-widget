function createWidget(body) {
  const head = document.querySelector('head')
  if (!head) console.error("Error!")
  else head.appendChild(getCSS())
  body.innerHTML += createButton()
}

function createButton() {
  return `
    <div class="wid__button_wrapper">
      <div class="wid__button_box">
        <div style="wid__button_curt"></div>
        <img src="https://vcbox.id/favicon.png" class="wid__button_ico">
      </div>
    </div>
  `
}

function createBox() {
  
}

function getCSS() {
  const link = document.createElement('link') 
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = 'http://127.0.0.1:5500/index.css'
  return link
}

document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body')
  if (body) return createWidget(body)
})