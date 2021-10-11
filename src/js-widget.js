function createWidget(body) {
  const head = document.querySelector('head')
  if (!head) console.error("Error!")
  else getCSS().then(data => {
    head.appendChild(data)
    body.classList.add('overflow-x-hidden')
    body.innerHTML += createButton()
    
    const openBox = document.querySelector('#openbox')
    const closeBox = document.querySelector('#closebox')
    if (openBox && closeBox) {
      const buttonWrapper = document.querySelector('.wid__button_wrapper')
      const boxWrapper = document.querySelector('.wid__box_wrapper')
      if (buttonWrapper && boxWrapper) {
        openBox.addEventListener('click', () => openClose(buttonWrapper, boxWrapper))
        closeBox.addEventListener('click', () => openClose(buttonWrapper, boxWrapper))
      }
    }
  }).catch(err => {
    console.error(err)
  })

}

function openClose(button, box) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
    button.classList.add('deactive')
  } else {
    button.classList.remove('deactive')
    button.classList.add('active')
  }
  if (box.classList.contains('deactive')) {
    box.classList.remove('deactive')
    box.classList.add('active')
  } else {
    box.classList.remove('active')
    box.classList.add('deactive')
  }
}

function createButton() {
  return `
    ${createBox()}
    <div class="wid__button_wrapper active">
      <div id="openbox"></div>
      <div class="wid__button_box">
        <div style="wid__button_curt"></div>
        <img src="https://vcbox.id/favicon.png" class="wid__button_ico">
      </div>
    </div>
  `
}

function createBox() {
  return `
    <div class="wid__box_wrapper deactive">
      <div class="wid__box_inner">
        <div class="wid__box_close" id="closebox">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-skip-end-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L9.5 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L6.79 5.093z"/>
          </svg>
        </div>
        <div class="wid__box_top">
          <strong>VCBox</strong>
          <div class="wid__box_us">
            <div class="us__wrapper">
              <div class="us__inner">
                <img src="https://source.unsplash.com/random" class="us__img">
              </div>
            </div>
            <div class="us__wrapper">
              <div class="us__inner">
                <img src="https://source.unsplash.com/random" class="us__img">
              </div>
            </div>
            <div class="us__wrapper">
              <div class="us__inner">
                <img src="https://source.unsplash.com/random" class="us__img">
              </div>
            </div>
            <div class="us__wrapper">
              <div class="us__inner">
                <img src="https://source.unsplash.com/random" class="us__img">
              </div>
            </div>
            <div class="us__wrapper">
              <div class="us__inner">
                <img src="https://source.unsplash.com/random" class="us__img">
              </div>
            </div>
          </div>
        </div>
        <div class="wid__box_middle"></div>
        <div class="wid__box_bottom">
          <input type="text" class="wid__box_input" placeholder="Type message...">
        </div>
      </div>
    </div>
  `
}

async function getCSS() {
  const check = await checkAssets('http://127.0.0.1:5500/sample.css')
  if (!check.status) return console.error('error get asset, please contact support!')
  const link = document.createElement('link') 
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = check.message
  return link
}

document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body')
  if (body) return createWidget(body)
})

function checkAssets(uri) {
  const xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return
      }
      if (xhr.status === 200) {
        resolve({
          status: true,
          message: uri
        })
      } else {
        resolve({ status: false })
      }
    }
    xhr.open('GET', uri)
    xhr.send()
  })
}