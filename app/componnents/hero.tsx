import { Pills } from "./pills";
import { Button } from "./button";
import Image from "next/image";
import heroFood from "@/public/hero-food.png"

export function Hero() {
  return (
    <section className="flex  h-[95vh] w-full   p-10">
        <div className="flex bg-[#E7FAFE] rounded-3xl w-full">
            <div className="w-1/2 px-10 py-10 flex flex-col justify-between">
               <div>
                 <Pills className="bg-white w-fit mb-6">
                      <p className="text-sm">Hot Recipie</p>
                  </Pills>
                  <h1 className="text-6xl font-bold mb-6">Spicy delicious <br /> chicken wings</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                  
                  <div className="flex mt-5 gap-4">
                    <Pills className="bg-white w-fit mb-6">
                      <p className="text-sm">30 Mins</p>
                    </Pills>

                    <Pills className="bg-white w-fit mb-6">
                      <p className="text-sm">Chicken</p>
                    </Pills>
                  </div>
               </div>


                <div className="flex justify-between">
                  {/* person  */}
                  <div className="flex gap-3">
                    <div className="bg-red-800 w-[50px] h-[50px] rounded-full">
                      <Image alt="" src=""/>
                    </div>

                    <div >
                      <p className="font-bold">John</p>
                      <p>March 2, 2023</p>
                    </div>
                  </div>

                  {/* button  */}
                  <button className="bg-black text-white py-3 px-8 rounded-lg">
                    View Recipies
                  </button>
                </div>
                
            </div>

           
            <div className="w-1/2 h-full  ">
              <Image src={heroFood} alt="Hero food image"  className="h-full w-full object-center"/>
            </div>
            
        </div>
    </section>
  );
}