"use clinet";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <section>
      <Editor
        width="70vw"
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="//your code here"
      />
    </section>
  );
};
export default CodeEditor;
