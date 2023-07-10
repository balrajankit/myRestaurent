import React from 'react'
import style from '../styles/header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserChef,faCheckToSlot,faUtensils, faBurger, } from "@fortawesome/free-solid-svg-icons";
import Banner from '@/components/Banner';
import CardDetail from '@/components/CardSection';
import Head from 'next/head';
import Slide from '@/components/Slide';




const index = () => {
  return (
    <>
    <Head>
      <title>index</title>
    </Head>
       <Banner></Banner> 
       <Slide></Slide>
       <CardDetail></CardDetail>
    </>
  )
}

export default index