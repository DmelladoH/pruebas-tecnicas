import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MyListProvider } from './context/myListContext.tsx'
import { BooksProvider } from './context/BooksContext.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyListProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </MyListProvider>
  </React.StrictMode>
)
