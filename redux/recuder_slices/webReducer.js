import { createSlice } from '@reduxjs/toolkit'

export const webSlice = createSlice({
  name: 'webReducer',
  initialState: {
    value: 0,
    hoverWork: false,
    hoverActive: false,
    hoverNvoProject: false,
    hoverNvoProjectHeader: false,
    hoverArrowL: false,
    hoverArrowR: false,
    hoverCookies: false,
    cursorPointer: false,
    hoverDesign: false,
    hoverBrand: false,
    hoverMotion: false,
    hoverSoftware: false,
    services: [],
    showCookies: true,
    hoverServices: {
      'uxui': false,
      'brand': false,
      'motion': false,
      'software': false
    },
    hoverLinksServices:{
      'uxui': false,
      'brand': false,
      'motion': false,
      'software': false
    },
    hoverItemsMenu:{
      'Home': false,
      'Crew': false,
      'Servicios': false,
      'Work': false,
      'Contacto': false
    },
    hoverItemsCrew:{
      'angie': false,
      'alex': false,
      'sakre': false
    }

  },
  reducers: {
    loadServices: (state, action) => { 
      let servicesList = [
        {
          key: "uxui",
          name: 'Design UX/UI',
          description: "¿Has pensado alguna vez en que todas las compras que hacemos implican un proceso de compra previo al momento de la transacción?",
        },
        {
          key: "brand",
          name: 'Brand Strategy',
          description: "¿Has pensado alguna vez en que todas las compras que hacemos implican un proceso de compra previo al momento de la transacción?",
        },
        {
          key: "motion",
          name: 'Motion design',
          description: "¿Has pensado alguna vez en que todas las compras que hacemos implican un proceso de compra previo al momento de la transacción?",
        },
        {
          key: "software",
          name: 'Software',
          description: "¿Has pensado alguna vez en que todas las compras que hacemos implican un proceso de compra previo al momento de la transacción?",
        }
      ]
    
      state.services = servicesList
    },
    updHoverServices: (state, action) => {
      let newServiceHoverState = {...state.hoverServices, [action.payload.key]: action.payload.val }
      state.hoverServices = newServiceHoverState
    },
    updHoverLinks: (state, action) => {
      let newLinksHoverState = {...state.hoverLinksServices, [action.payload.key]: action.payload.val }
      state.hoverLinksServices = newLinksHoverState
    },
    updHoverMenu: (state, action) => {
      let newMenuHoverState = {...state.hoverItemsMenu, [action.payload.key]: action.payload.val }
      state.hoverItemsMenu = newMenuHoverState
    },
    updHoverCrew: (state, action) => {
      let newCrewHoverState = {...state.hoverItemsCrew, [action.payload.key]: action.payload.val }
      state.hoverItemsCrew = newCrewHoverState
    },
    setHoverWork: (state, action) => {
      state.hoverWork = action.payload
    },
    setHoverNvoProject: (state, action) => {
      state.hoverNvoProject = action.payload
    },
    setHoverNvoProjectHeader: (state, action) => {
      state.hoverNvoProjectHeader = action.payload
    },
    setHoverActive: (state, action) => {
      state.hoverActive = action.payload
    },
    setHoverArrowLeft: (state, action) => {
      state.hoverArrowL = action.payload
    },
    setHoverArrowRight: (state, action) => {
      state.hoverArrowR = action.payload
    },
    setHoverCookies: (state, action) => {
      state.hoverCookies = action.payload
    },
    setCursorPointer: (state, action) => {
      state.cursorPointer = action.payload
    },
    setShowCookie: (state, action) => {
      state.showCookies = action.payload
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { 
          increment, 
          decrement, 
          incrementByAmount, 
          setHoverWork, 
          setHoverNvoProject, 
          setHoverNvoProjectHeader, 
          setHoverActive, 
          setHoverArrowLeft, 
          setHoverArrowRight,
          setCursorPointer, 
          loadServices,
          updHoverServices,
          updHoverLinks,
          updHoverMenu,
          updHoverCrew,
          setHoverCookies,
          setShowCookie
        } = webSlice.actions

export default webSlice.reducer