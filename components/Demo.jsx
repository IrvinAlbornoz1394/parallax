import { Global, css } from '@emotion/react'
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { useSelector, useDispatch } from 'react-redux'
import { setHoverWork, setHoverNvoProject, setHoverNvoProjectHeader, setHoverActive, setHoverArrowLeft, setHoverArrowRight, setCursorPointer, updHoverServices, updHoverLinks, updHoverMenu, updHoverCrew, setHoverCookies, setShowCookie } from '../redux/recuder_slices/webReducer'

const Demo = ({refLef, refRight, ...props}) => {

  const dispatch = useDispatch()

  const hoverArrowL = useSelector((state) => state.web.hoverArrowL)
  const hoverArrowR = useSelector((state) => state.web.hoverArrowR)
  const hoverWork = useSelector((state) => state.web?.hoverWork)
  const hoverActive = useSelector((state) => state.web?.hoverActive)
  const hoverNvoProject = useSelector((state) => state.web?.hoverNvoProject)
  const hoverNvoProjectHeader = useSelector((state) => state.web?.hoverNvoProjectHeader)
  const hoverServices = useSelector((state) => state.web?.hoverServices)
  const hoverLinksServices = useSelector((state) => state.web?.hoverLinksServices)
  const hoverItemsMenu = useSelector((state) => state.web?.hoverItemsMenu)  
  const cursorPointer = useSelector((state) => state.web?.cursorPointer)
  const hoverItemsCrew = useSelector((state) => state.web?.hoverItemsCrew)
  const hoverCookies = useSelector((state) => state.web?.hoverCookies)


  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
  }, [])

  /* useEffect(() => {
    console.log('hoverServices',hoverServices)
  }, [hoverServices]) */
  


  
  const onMouseMove = (e) => { 
    hoverFn(e)
  }

  const hoverFn = (e) => {
    /* Obtener coordenadas del boton work */
    if(validateHoverWork(e) || validateHoverNvoProj(e) || validateHoverNvoProjHeader(e)){
      /* setHoverActive(true) */
      mouseHover(true)
    }else{
      mouseHover(false)
    }

    if(validateHoverArrowLeft(e) || validateHoverArrowRight(e)){
      mouseHover(true, false)
    }

    if(validateHoverCookies(e)){
      mouseHover(true, false)
    }

    validateHoverServices(e)

    validateHoverMenu(e)

    validateHoverCrew(e)

    if(validateHoverLinksProjects(e)){
      mouseHover(true, false)
    }

    
    
    
  }

  const validateHoverWork = (e) => {
    let btnWork = document.getElementById("btn_work")
    if(btnWork){
      let coordsWork = btnWork.getBoundingClientRect();
      
      let xminWork = coordsWork.x
      let xmaxWork = coordsWork.x + coordsWork.width
      let yminWork = coordsWork.y 
      let ymaxWork = coordsWork.y + coordsWork.height

      if (xminWork < e.x && e.x < xmaxWork && yminWork < e.y && e.y < ymaxWork && !hoverWork){
        dispatch(setHoverWork(true))
        return true
      } else if((xminWork > e.x || e.x > xmaxWork || yminWork > e.y || e.y > ymaxWork)){
        dispatch(setHoverWork(false))
        return false
      }
    }
  }

  const validateHoverNvoProj = (e) => {
    /* Obtenemos coordenadas del boton nuevo proyecto */
    let btnNewProj = document.getElementById("btn_new_project")
    if(btnNewProj){
      let coordsNvoProj = btnNewProj.getBoundingClientRect();

      let xminProj = coordsNvoProj.x
      let xmaxProj = coordsNvoProj.x + coordsNvoProj.width
      let yminProj = coordsNvoProj.y 
      let ymaxProj = coordsNvoProj.y + coordsNvoProj.height

      if (xminProj < e.x && e.x < xmaxProj && yminProj < e.y && e.y < ymaxProj && !hoverNvoProject){
        dispatch(setHoverNvoProject(true))
        return true
      } else if((xminProj > e.x || e.x > xmaxProj || yminProj > e.y || e.y > ymaxProj)){
        dispatch(setHoverNvoProject(false))
        return false
      }
    }
  }

  
  const validateHoverNvoProjHeader = (e) => {
    /* Obtenemos coordenadas del boton nuevo proyecto */
    let btnNewProjHeader = document.getElementById("btn_nvo_project_header")
    if(btnNewProjHeader){
      let coordsNvoProjH = btnNewProjHeader.getBoundingClientRect();

      let xminProj = coordsNvoProjH.x
      let xmaxProj = coordsNvoProjH.x + coordsNvoProjH.width
      let yminProj = coordsNvoProjH.y 
      let ymaxProj = coordsNvoProjH.y + coordsNvoProjH.height

      if (xminProj < e.x && e.x < xmaxProj && yminProj < e.y && e.y < ymaxProj && !hoverNvoProjectHeader){
        dispatch(setHoverNvoProjectHeader(true))
        return true
      } else if((xminProj > e.x || e.x > xmaxProj || yminProj > e.y || e.y > ymaxProj)){
        dispatch(setHoverNvoProjectHeader(false))
        return false
      }
    }
  }

  const validateHoverArrowLeft = (e) => {
    /* Obtenemos coordenadas del boton nuevo proyecto */
    let arrow_left = document.getElementById("arrow_left")
    if(arrow_left){
      let coords_arrow_left = arrow_left.getBoundingClientRect();

      let xminProj = coords_arrow_left.x - 10
      let xmaxProj = coords_arrow_left.x + coords_arrow_left.width + 10
      let yminProj = coords_arrow_left.y -10
      let ymaxProj = coords_arrow_left.y + coords_arrow_left.height +10

      if (xminProj < e.x && e.x < xmaxProj && yminProj < e.y && e.y < ymaxProj && !hoverArrowL){
        dispatch(setHoverArrowLeft(true))
        return true
      } else if(xminProj > e.x || e.x > xmaxProj || yminProj > e.y || e.y > ymaxProj && hoverArrowL) {
        dispatch(setHoverArrowLeft(false))
        return false
      }
    }
  }

  const validateHoverArrowRight = (e) => {
    /* Obtenemos coordenadas del boton nuevo proyecto */
    let arrow_right = document.getElementById("arrow_right")
    if(arrow_right){
      let coords_arrow_right = arrow_right.getBoundingClientRect();

      let xminProj = coords_arrow_right.x - 10
      let xmaxProj = coords_arrow_right.x + coords_arrow_right.width + 10
      let yminProj = coords_arrow_right.y -10
      let ymaxProj = coords_arrow_right.y + coords_arrow_right.height +10

      if (xminProj < e.x && e.x < xmaxProj && yminProj < e.y && e.y < ymaxProj && !hoverArrowL){
        dispatch(setHoverArrowRight(true))
        return true
      } else if(xminProj > e.x || e.x > xmaxProj || yminProj > e.y || e.y > ymaxProj && hoverArrowL) {
        dispatch(setHoverArrowRight(false))
        return false
      }
    }
  }

  /* Validar hover para aceptar cookies */
  const validateHoverCookies = (e) => {
    /* Obtenemos coordenadas del boton nuevo proyecto */
    let ok_cookies = document.getElementById("accept_cookies")
    if(ok_cookies){
      let coords_ok_cookies = ok_cookies.getBoundingClientRect();

      let xminCookies = coords_ok_cookies.x - 10
      let xmaxCookies = coords_ok_cookies.x + coords_ok_cookies.width + 10
      let yminCookies = coords_ok_cookies.y -10
      let ymaxCookies = coords_ok_cookies.y + coords_ok_cookies.height +10

      if (xminCookies < e.x && e.x < xmaxCookies && yminCookies < e.y && e.y < ymaxCookies && !hoverArrowL){
        dispatch(setHoverCookies(true))
        return true
      } else if(xminCookies > e.x || e.x > xmaxCookies || yminCookies > e.y || e.y > ymaxCookies && hoverArrowL) {
        dispatch(setHoverCookies(false))
        return false
      }
    }
  }

  /* Validar cada uno de los items de la lista de servicios del index */
  const validateHoverItemServices = (item, e) => {
    /* Obtener las coordenadas   */
    let coords_item = item.getBoundingClientRect()
    let xminServItem = coords_item.x
    let xmaxServItem = coords_item.x + coords_item.width + 10
    let yminServItem = coords_item.y -10
    let ymaxServItem = coords_item.y + coords_item.height +10
    /* Validamos que ningun item tengo el hover para que solo sea uno a la vez */
    if (yminServItem < e.y && e.y < ymaxServItem && e.x > xminServItem ){
      if(item.id == "show_uxui"){
        console.log('hoveeer')
      }
      dispatch(updHoverServices({val: true, key: item.id}))
      mouseHover(true)
      return true
    } else if(yminServItem > e.y || e.y > ymaxServItem || e.x < xminServItem) {
      if(item.id == "show_uxui"){
        if(yminServItem > e.y){
          console.log('1')
        }
        if(e.y > ymaxServItem){
          console.log('2')
        }
        if(e.x < xminServItem){
          console.log('3')
        }
      }
      
      /* console.log('====')
      console.log('e.x',e.x)
      console.log('xminServItem',xminServItem)
      console.log('1111') */
      dispatch(updHoverServices({val: false, key: item.id}))
      return false
    }
  }

  /* Hover para lista de servicios en index */
  const validateHoverServices = (e) => {
    /* Obtenemos coordenadas del boton nuevo proyecto */
    let texts = document.getElementsByClassName("titleServicesContent")
    if(texts){
      for (let item of texts) {
        validateHoverItemServices(item, e)
      } 
    }
  }


  /* validar el hover en item de link de empezar proyecto */
  const validateHoverItemLink = (item, e) => {
    /* Obtener las coordenadas   */
    let coords_item = item.getBoundingClientRect()
    let xminServItem = coords_item.x
    let xmaxServItem = coords_item.x + coords_item.width
    let yminServItem = coords_item.y
    let ymaxServItem = coords_item.y + coords_item.height
    /* Validamos que ningun item tengo el hover para que solo sea uno a la vez */

    if ( xminServItem < e.x && xmaxServItem > e.x && yminServItem < e.y && e.y < ymaxServItem && hoverLinksServices[item.id] == false){
      dispatch(updHoverLinks({val: true, key: item.id}))
      return true
    } else if(yminServItem > e.y || e.y > ymaxServItem) {
      dispatch(updHoverLinks({val: false, key: item.id}))
      return false
    }
  }

  const validateHoverItemMenu = (item, e) => {
    /* Obtener las coordenadas   */
    let coords_item = item.getBoundingClientRect()
    let xminMenuItem = coords_item.x
    let xmaxMenuItem = coords_item.x + coords_item.width
    let yminMenuItem = coords_item.y
    let ymaxMenuItem = coords_item.y + coords_item.height
    /* Validamos que ningun item tengo el hover para que solo sea uno a la vez */
    if ( xminMenuItem < e.x && xmaxMenuItem > e.x && yminMenuItem < e.y && e.y < ymaxMenuItem && hoverItemsMenu[item.id] == false){
      dispatch(updHoverMenu({val: true, key: item.id}))
      mouseHover(true, false)
      return true
    } else if(xminMenuItem > e.x || xmaxMenuItem < e.x || yminMenuItem > e.y || e.y > ymaxMenuItem) {
      dispatch(updHoverMenu({val: false, key: item.id}))
      return false
    }
  }

  const validateHoverLinksProjects = (e) => {
    /* Obtenemos coordenadas del link de empezar proyecto */
    let links = document.getElementsByClassName("link_start_project")
    if(links){
      for (let item of links) {
        validateHoverItemLink(item, e)
      } 
    }
  }

  /* validar el hover en item de link de empezar proyecto */
  const validateHoverItemCrew = (item, e) => {
    /* Obtener las coordenadas   */
    let coords_item = item.getBoundingClientRect()
    let xminCrewItem = coords_item.x
    let xmaxCrewItem = coords_item.x + coords_item.width
    let yminCrewItem = coords_item.y
    let ymaxCrewItem = coords_item.y + coords_item.height
    /* Validamos que ningun item tengo el hover para que solo sea uno a la vez */
    if ( xminCrewItem < e.x && xmaxCrewItem > e.x && yminCrewItem < e.y && e.y < ymaxCrewItem && hoverItemsCrew[item.id] == false){
      dispatch(updHoverCrew({val: true, key: item.id}))
      mouseHover(true, false)
      return true
    } else if( xminCrewItem > e.x || xmaxCrewItem < e.x || yminCrewItem > e.y || e.y > ymaxCrewItem) {
      dispatch(updHoverCrew({val: false, key: item.id}))
      return false
    }
  }

  const validateHoverCrew = (e) => {
    /* Obtenemos coordenadas del link de empezar proyecto */
    let element = document.getElementsByClassName("react-multi-carousel-item--active")
    if(element){
      for (let item of element) {
        let child_item = item.querySelector("div.border-card-crew")
        validateHoverItemCrew(child_item, e)
      } 
    }
  }

  const validateHoverMenu = (e) => {
    let items_menu = document.getElementsByClassName("item_menu_header")
    if(items_menu){
      for (let item of items_menu){
        validateHoverItemMenu(item, e)
      }
    }
  }



  const mouseHover = (flag, mouseEffect=true) => {
    dispatch(setHoverActive(flag))
    dispatch(setCursorPointer(flag))
    if (mouseEffect){
      if ( flag === true){
        gsap.to(".ball", {display:'none', duration: 0.01})
        gsap.to(".cursor-example", {width:50, height:50, xPercent: -50, yPercent: -50})
      } else if( flag === false){
        gsap.to(".ball", {display:'block', duration:0.1})
        gsap.to(".cursor-example", {width:10, height:10, xPercent: 0, yPercent: 0})
      }
    }
  }

  /*  */

  useEffect(() => {
    gsap.set(".ball", {xPercent: -50, yPercent: -50});
    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.1;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    
    window.addEventListener("mousemove", e => {    
      mouse.x = e.x;
      mouse.y = e.y;  
    });

    gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });

    /*  */
    let posX = 0,
        posY = 0;

    let mouseX = 0,
        mouseY = 0;

    gsap.to(".cursor-example", {
      duration: 0.01,
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 4;
        posY += (mouseY - posY) / 4;

        gsap.set(".cursor-example", {
          css: {
              left: posX - 5,
              top: posY - 5
          }
        });
      }
    });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

}, [])



/* Funcion para validar a que elemento se le esta dando click */
const clickFunction = () => {
  /* Validar click para ocultar cookies */
  if(hoverCookies){
    dispatch(setShowCookie(false))
  }

  /* Validar hover en la flecha izquierda del carrousel del crew */
  if(hoverArrowL){
    refLef.current.click()
  }
  /* Validar hover en la flecha derecha del carrousel del crew */
  if(hoverArrowR){
    refRight.current.click()
  }

  for (const [key, value] of Object.entries(hoverItemsMenu)) {
    if(value == true){  
      let element = document.getElementById(`section_${key}`);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }  
}
  

}

  /*  */
  return (
    <>
      <Global styles={css`
        .ball{
          width: 50px;
          height: 50px;
          position: fixed;
          top: 0;
          left: 0;
          border: 1px solid var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index:200;
        }
        .cursor-example {
          
          width: 10px;
          z-index:200;
          height: 10px;
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 100%;
          background-color: white;
          z-index:100;
          mix-blend-mode: difference;
          }
        `} 
      />
      <div className="ball" ></div>
      <div className="cursor-example" onClick={() => clickFunction() } ></div>
    </>
  )
}

export default Demo