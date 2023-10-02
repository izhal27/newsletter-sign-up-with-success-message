'use client'

import { useState } from "react";
import Image from "next/image";
import checkIcon from '../public/icons/icon-list.svg';

export default function Home() {
  const [submitedStatus, setSubmitedStatus] = useState(true);

  const FormComponent = () => (
    <>
      <section>
        <div>
          <Image
            className="sm:hidden"
            src={"/images/illustration-sign-up-mobile.svg"}
            alt="Illustration Image"
            width={0}
            height={0}
            style={{ objectFit: "cover", width: "100vw", height: "auto" }}
          />
        </div>
      </section>
      <section className="flex flex-col justify-end p-5 mt-3 gap-7 text-dark-slate-grey">
        <h1 className="text-4xl font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="flex flex-col space-y-3">
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
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold"
                htmlFor="email">Email address</label>
              <input
                className="px-5 py-3 border rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com" />
            </div>
            <button
              className="px-5 py-4 font-bold text-center text-white rounded-lg bg-dark-slate-grey"
              type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </section>
    </>
  );

  const SuccessComponent = () => (
    <>
      <section className="flex flex-col justify-around h-screen gap-10 px-5 py-7 text-dark-slate-grey">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col gap-7">
            <Image
              className="sm:hidden"
              src={"/icons/icon-success.svg"}
              alt="Illustration Image"
              width={60}
              height={60}
            />
            <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className="font-bold">ash@loremcompany.com.</span>{" "}
              Please open it and click the button inside to confirm your subscription.</p>
          </div>
        </div>
        <button
          className="px-5 py-4 font-bold text-center text-white rounded-lg bg-dark-slate-grey"
          type="submit"
          onClick={() => setSubmitedStatus(false)}>Dismiss message</button>
      </section>
    </>
  )

  return (
    <main className="flex flex-col h-screen">
      {submitedStatus ? <SuccessComponent /> : <FormComponent />}
    </main>
  )
}
