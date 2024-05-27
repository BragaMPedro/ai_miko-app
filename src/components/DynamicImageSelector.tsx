interface DynamicImageSelectorProps {
   changeHandler: boolean;
   bgImage: string;
   title: string;
   desciption: string;
   onClick: () => void;
}

export const DynamicImageSelector = ({
   title,
   desciption,
   changeHandler,
   bgImage,
   onClick,
}: DynamicImageSelectorProps) => {

   return (
      <div
      id="container"
         onClick={onClick}
         className={`h-full cursor-pointer flex-col flex items-center justify-center bg-cover bg-no-repeat bg-center ${bgImage} transition-all duration-200 ${
            !changeHandler ? "flex-1 hover:flex-[1.3]" : "flex-[2]"
         }`}>
         <div
            className={`flex-1 flex hover:backdrop-blur-0 backdrop-brightness-75 transition-all duration-200 ${
               !changeHandler && "backdrop-brightness-[.2] backdrop-blur-[4px]"
            }`}>
            <div className={`w-full transition-all duration-200 hover:shadow-md flex flex-1 flex-col items-center justify-center ${!changeHandler ? "opacity-0" : "scale-[0.9] opacity-100"} text-white`}>
               <h2
                  className={`font-black text-3xl text-center`}>
                  {title}
               </h2>
               <p className={`w-3/4 text-center`}>
                  {desciption}
               </p>
            </div>
         </div>
      </div>
   );
};
