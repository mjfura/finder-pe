import { ReactElement } from "react";
import Layout from "../components/layout";
import {IoIosArrowDown} from "react-icons/io";
import Link from "next/link";
import SearchBox from "../components/common/SearchBox";
import { GetStaticProps } from "next";
import { fetchPlaces } from "../utils/fetch";
import { Place } from "../models/interfaces/place";
type HomeProps={
    db:Place[],
    message:string
}
export default function Home({db,message}:HomeProps):ReactElement{
    return(
        <section className="p-4 flex justify-center flex-col text-white items-center min-h-screen bg-gradient-to-br from-purple-900 to-purple-400  " >
            <p className="uppercase tracking-widest 2xl:text-xl " >Uso gratuito</p>
            <h1 className="text-3xl md:text-4xl 2xl:text-7xl 2xl:w-96 lg:text-5xl lg:w-60 w-48 font-semibold text-center" >
                Encuentra cualquier lugar en 1 minuto
            </h1>
            <SearchBox db={db} />    
            <article className="flex justify-center" >
                <span className="flex text-3xl animate-bounce justify-center items-center" >
                    <IoIosArrowDown/>
                </span>
            </article>
            <article className="flex flex-col items-center" >
                <p className="text-xl 2xl:text-2xl my-4 text-center" >¿Deseas agregar una nueva dirección?</p>
                <Link href="/create-public-card" >
                    <a className="py-3 px-6 2xl:py-4 2xl:px-8 2xl:text-xl rounded-2xl uppercase tracking-widest border-2 border-white text-white font-bold hover:bg-white transition-all duration-300 hover:text-purple-500" >
                        Comenzar
                    </a>
                </Link>
            </article>
        </section>
    )
}
Home.getLayout=function getLayout(page:ReactElement):ReactElement{
    return(
        <Layout>
            {page}
        </Layout>
    )
}
export const getStaticProps:GetStaticProps=async()=>{
    const places=await fetchPlaces();
    if(places.error){
        return{
            props:{
                message:places.message
            },
            revalidate:10
        }
    }
    return{
        props:{
            db:places
        },
        revalidate:10
    }
}