"use client";
import Form from "@/components/form";
import { Button } from "@ui/components/ui/button";
import { useRef } from "react";

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 w-full p-10 flex-col h-screen gap-10">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
        Form Project with useState & useRef
      </h1>

      <Form ref={formRef} />
      <Button
        onClick={handleButtonClick}
        className="max-w-2xl w-full"
        variant="default"
      >
        Submit
      </Button>
    </div>
  );
};

export default Page;
