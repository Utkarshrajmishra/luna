"use client";
import CodeEditor from "@/components/Editor";
import Input from "@/components/Input";
import Output from "@/components/Output";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const Editor = ({ params }:{params:Params}) => {


  return (
    <>
      <h1>{params.editor}</h1>
      <div className=" h-[100vh] flex gap-1 p-2">
        <section className="flex-col  h-full justify-start items-end">
          <CodeEditor />
        </section>
        <section className="w-full flex gap-1 flex-col">
          <Output />
          <Input />
        </section>
      </div>
    </>
  );
};

export default Editor;
