const box = document.getElementById('lazyload_box')

function newImg() {
    const img = document.createElement('img')
    img.className = 'lazy_img'
    img.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540444824778&di=60e7e9808f7447b67fa1f0d3ec2c7ff6&imgtype=0&src=http%3A%2F%2Fs0.hao123img.com%2Fres%2Fr%2Fimage%2F2016-05-17%2F63f8b2ce3f6fbd9a5731705a3258c3f3.jpg'
    return img
}

function addImg() {
    const img = newImg()
    box.appendChild(img)
    setTimeout(()=>{img.style.opacity = 1},1000)
}

for(let i =0;i<4;i++) {
    addImg()
}

window.onscroll = function () {
    const body = document.body
    const lazy_box = box.getBoundingClientRect().height + box.offsetTop
    const bodyViewHeight = document.documentElement.clientHeight
    const bodyScrollTop = parseInt(body.scrollTop || document.documentElement.scrollTop)
    if(lazy_box <= bodyViewHeight +  bodyScrollTop) {
        addImg()
    }
}