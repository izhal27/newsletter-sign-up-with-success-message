'use client'

import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import checkIcon from '../public/icons/icon-list.svg';

export default function Home() {
  const [submitedStatus, setSubmitedStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const inputRef = useRef<any>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = inputRef.current.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setSubmitedStatus(true);
      setErrorStatus(false);
    } else {
      inputRef.current.value = email;
      setErrorStatus(true);
    }
  }

  const FormComponent = () => (
    <div className="bg-white sm:flex sm:flex-row-reverse sm:justify-center sm:rounded-xl sm:max-h-fit sm:gap-5 sm:items-center sm:py-4">
      <section>
        <Image
          className="sm:hidden"
          src={"/images/illustration-sign-up-mobile.svg"}
          alt="Illustration Image"
          width={0}
          height={0}
          style={{ objectFit: "cover", width: "100vw", height: "auto" }}
        />
        <Image
          className="hidden sm:block"
          src={"/images/illustration-sign-up-desktop.svg"}
          alt="Illustration Image"
          width={0}
          height={0}
          layout="responsive"
          objectFit="cover"
        />
      </section>
      <section className="flex flex-col justify-end p-5 mt-3 sm:mt-0 gap-7 sm:gap-5 text-dark-slate-grey sm:basis-1/2">
        <h1 className="text-4xl font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="flex flex-col space-y-3 sm:space-y-2">
          <p className="flex gap-5">
            <span>
              <Image
                src={checkIcon}
                width={24}
                height={24}
                alt="Check Icon" />
            </span>
            Product discovery and building what matters
          </p>
          <p className="flex gap-5"><span><Image src={checkIcon} width={24} height={24} alt="Check Icon" /></span>Measuring to ensure updates are a success</p>
          <p className="flex gap-5"><span><Image src={checkIcon} width={24} height={24} alt="Check Icon" /></span>And much more!</p>
        </div>
        <div>
          <form className="flex flex-col gap-6" onSubmit={(e) => onSubmit(e)}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label
                  className="text-sm font-bold"
                  htmlFor="email">Email address</label>
                {errorStatus ?
                  <label
                    className="text-sm font-bold transition duration-300 text-tomato"
                    htmlFor="email">Valid email required</label> : null}
              </div>
              <input
                ref={inputRef}
                className={`px-5 py-3 border rounded-lg focus:outline-dark-slate-grey ${errorStatus ? "bg-red-200 text-tomato focus:outline-tomato" : ""}`}
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com" />
            </div>
            <button
              className="px-5 py-4 font-bold text-center text-white transition duration-300 ease-in-out rounded-lg bg-dark-slate-grey hover:bg-gradient-to-r from-[#FF527B] to-[#FF6A3A] hover:shadow-lg hover:shadow-tomato"
              type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </section>
    </div>
  );

  const SuccessComponent = () => (
    <>
      <section className="flex flex-col justify-around h-screen gap-10 px-5 bg-white py-7 text-dark-slate-grey sm:max-w-sm sm:mx-auto sm:h-auto sm:rounded-3xl sm:p-8 sm:gap-5">
        <div className="flex flex-col justify-center h-full sm:h-auto ">
          <div className="flex flex-col gap-7 sm:gap-4">
            <Image
              src={"/icons/icon-success.svg"}
              alt="Illustration Image"
              width={60}
              height={60}
            />
            <h1 className="text-4xl font-bold sm:text-5xl">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className="font-bold">ash@loremcompany.com.</span>{" "}
              Please open it and click the button inside to confirm your subscription.</p>
          </div>
        </div>
        <button
          className="px-5 py-4 font-bold text-center text-white transition duration-300 ease-in-out rounded-lg bg-dark-slate-grey hover:bg-gradient-to-r from-[#FF527B] to-[#FF6A3A] hover:shadow-lg hover:shadow-tomato"
          type="submit"
          onClick={() => setSubmitedStatus(false)}>Dismiss message</button>
      </section>
    </>
  )

  return (
    <main className="flex flex-col h-screen sm:bg-dark-slate-grey sm:justify-center sm:items-center">
      {submitedStatus ? <SuccessComponent /> : <FormComponent />}
    </main>
  )
}
