"use client";
import { useEffect } from "react"

export default function Home() {  
  useEffect(() => {
      window.location.href = `auth/login`
    }, [])

  return <div></div>
};