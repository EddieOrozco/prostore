'use client';
import {APP_NAME} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image"

const NotFoundPage = () => {
    const goToHome = () => {
        window.location.href = '/';
    }

    return ( 
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
            <p className="font-bold text-2xl">404 NOT FOUND</p>
            <div className="flex justify-center mb-4">
                <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} height={48} width={48} priority={true} />   
            </div>
            <Button variant="destructive" onClick={ goToHome }>Back to Home</Button>
            <p className="font-bold">Sorry this page does not exist</p>

        </div> 
    );
}
 
export default NotFoundPage;