import {AboutUs} from "./AboutUs";
import { HeadingComponents } from "./HeadingComponents";
 
export const BlogPage = () => {
     const Heading = "Chat";
    return(
         <>
         <HeadingComponents heading={Heading}/>
         <AboutUs/>
         </>
     )
 }