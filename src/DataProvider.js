import React, { createContext, useReducer } from 'react'

import axios from 'axios'

const initialState = {
  isLoading: false,
  isLoaded: false,
  categories: {},
  projects: {},
}

const reducer = (state, action) => {
  if (action.type === 'LOAD') {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === 'LOAD_DONE') {
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      projects: action.payload.projects,
      categories: action.payload.categories,
    }
  }
  return state
}

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const mapById = arr => {
    if (!arr) return {}
    const maps = {}
    for (var i = 0; i < arr.length; i++) {
      maps[arr[i].id] = arr[i]
    }
    return maps
  }
  const loadData = async () => {
    dispatch({ type: 'LOAD' })
    axios
      .get('https://apps.aecom-digital.com/excellence/projects')
      .then(({ data }) => {
        const projects = {}
        let categories = {}
        for (var i = 0; i < data.length; i++) {
          projects[data[i].id] = data[i]
          categories = { ...categories, ...mapById(data[i].categories) }
        }
        dispatch({ type: 'LOAD_DONE', payload: { categories, projects } })
      })
  }
  return (
    <DataContext.Provider value={{ ...state, loadData }}>
      {children}
    </DataContext.Provider>
  )
}
