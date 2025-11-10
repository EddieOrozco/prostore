import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const curentYear = new Date().getFullYear();
    return ( 
        <footer className="w-full border-t mt-10">
            <div className="wrapper flex items-center justify-center py-5">
                <span className="text-sm text-center">&copy; {curentYear} {APP_NAME}. All rights reserved.</span>
            </div>
        </footer>
     );
}
 
export default Footer;