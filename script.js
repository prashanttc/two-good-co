
function menubar() {
    const mainmenu = document.querySelector(".mainmenu");
    const openmenu = document.querySelector(".openmenu");
    const closemenu = document.querySelector(".closemenu");
    const workarea = document.querySelector(".workarea")
    var image = document.querySelector('svg');
    var iconone = document.querySelector(".icons");
    var icontwo = document.querySelector(".iconsinside");


    openmenu.addEventListener('click', show);
    closemenu.addEventListener('click', close);

    function show() {
        mainmenu.style.display = 'flex';
        mainmenu.style.top = '0';
        workarea.style.display = 'none';
        image.style.color = 'white';
        iconone.style.display = 'none';
        icontwo.style.display = 'flex';
        gsap.from(".mainmenu li", {
            y: 30,
            opacity: 0,
            duration: 1.4,
            stagger: 0.1
        })
        gsap.from(".contactmenu ", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1
        })
    }

    function close() {
        mainmenu.style.top = '-170%';
        workarea.style.display = 'block';
        mainmenu.style.zIndex = '99';
        image.style.color = 'black';
        iconone.style.display = 'flex';
        icontwo.style.display = 'none';
    }

}
menubar();

function headanimation (){
    const timeline = gsap.timeline();

timeline
    .from(".nav", {
        opacity: 0,
        duration: 0.9,
        y: -40,
        stagger: 0.4
    })

    .to([".animhead1 h1", ".mainheadinner1 h1", ".mainheadinner2 h1"],
        {
            y: "-100%",
            duration: 0.2,
            stagger: 0.2
        })
    .play();

}
headanimation();

function twogood (){
    gsap.to([" .img img" ,".img svg" ], {
        y : "-200%",
         scrollTrigger: {
             trigger: ".img img",
             scroller: "body",
             start: "top -10%",
             // markers : true,
             end: "top -11%",
             scrub : true
         }}
     )
    gsap.to([ " .page5 .contactmenu"," .page5-final h3" ,".page5-final p"], {
         opacity:1,
         duration :1,
         y : 20,
         stagger :0.5,
         scrollTrigger: {
             trigger: ".para3",
             scroller: "body",
             start: "top 0%",
        //  markers : true,
             end: "top -20%",
             scrub : true
         }}
     )
}
twogood();

function section (){
    gsap.to( ".secimg1",{
        y : "200%",
        scrollTrigger : {
           trigger :".secimg1",
           scroller : "body",
           start : "top 50%",
           end : " top 80%",
        //    markers : true,
           scrub : 3
        }
       })
       gsap.to( ".secimg2",{
        y : "200%",
        scrollTrigger : {
           trigger :".secimg2",
           scroller : "body",
           start : "top 50%",
           end : " top 80%",
        //    markers : true,
           scrub : 3
        }
       })
       gsap.to( ".secimg3",{
        y : "200%",
        scrollTrigger : {
           trigger :".secimg3",
           scroller : "body",
           start : "top 50%",
           end : " top 80%",
        //    markers : true,
           scrub : 3
        }
       })
       
}
section();


function middleanime (){
    gsap.to(".shop", {
        scale : 1.1,
         opacity:1,
         duration:1,
         stagger:1,
         scrollTrigger:{
       trigger :".page2-2 h1",
       scroller :"body",
       start :"top 50%",
       end : "top 0",
     //   markers : true,
       scrub : true
         }
     })
     gsap.to(".page4-img img", {
         opacity:1,
         duration:1,
         stagger:1,
         scrollTrigger:{
       trigger :".page4-img",
       scroller :"body",
       start :"top 50%",
       end : "top 20%",
    //    markers : true,
         }
     })
}
middleanime ();