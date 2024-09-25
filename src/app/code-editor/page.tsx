"use client";
import CodeEditor from "@/components/Editor";
import Input from "@/components/Input";
import Output from "@/components/Output";

const Editor = () => {
  return (
    <div className="bg-zinc-100 h-[100vh] flex gap-3 p-3">
      <section className="flex-col  h-full justify-start items-end">
        <CodeEditor />
      </section>
      <section className="w-full flex gap-2 flex-col">
        <Output />
        <Input />
      </section>
    </div>
  );
};

export default Editor;
