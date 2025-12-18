function loadinganimation(){
gsap.from("#home #heading h1",{
    y: 100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
})

gsap.from("#home #heading h5",{
    x: 100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
})
gsap.from("#home #heading h3",{
    x: -100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
})
}
loadinganimation()