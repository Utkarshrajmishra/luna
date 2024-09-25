'use clinet'
import Editor from '@monaco-editor/react'

const CodeEditor=()=>{
    return(
        <Editor 
        height="90vh"
        theme='vs-dark'
        defaultLanguage='javascript'
        defaultValue='//your code here'
        />
    )
}
export default CodeEditor