import React, { useEffect, useState, useContext } from "react"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PasteIcon, CopyIcon } from './assets/Icons';
import { ThemeContext } from '../App';
import CopyToClipboard from 'react-copy-to-clipboard';

const Code = ({children, language}) =>{

  const [copied, setCopied] = useState(false);
  const {isDark} = useContext(ThemeContext)
  useEffect(()=>{
     const timer = setTimeout(()=>{
        setCopied(false)
     }, 1000)
     return () => clearTimeout(timer)
  }, [copied])
  return(
    <div className="code">
      <CopyToClipboard text={children}
                      onCopy={ () => setCopied(true) }>
      <button className="icon copy-icon">
         {copied ? <PasteIcon/> : <CopyIcon/>}
      </button>
      </CopyToClipboard>
   <SyntaxHighlighter
   style={ isDark ? materialDark : materialLight}
   language={language}
   >
     {children}
   </SyntaxHighlighter>
    </div>
  )
}
export default Code