const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const pertamaContent = document.querySelector('#pertama-content')
const keduaContent = document.querySelector('#kedua-content')
const ketigaContent = document.querySelector('#ketiga-content')


pertama.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Website Pertama',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 3,
    mount: pertamaContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

kedua.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Website Kedua',
    width: '400px',
    height: '400px',
    top: 90,
    right: 50,
    bottom: 50,
    left: 3,
    mount: keduaContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

ketiga.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Website ketiga',
    width: '400px',
    height: '400px',
    top: 130,
    right: 50,
    bottom: 50,
    left: 3,
    mount: ketigaContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
