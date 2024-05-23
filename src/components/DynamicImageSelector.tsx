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
         onClick={onClick}
         className={`h-full flex-1 cursor-pointer flex-col flex items-center justify-center bg-cover bg-no-repeat bg-center ${bgImage} transition-all duration-200 ${
            !changeHandler ? "hover:scale-[1.05]" : "scale-[1.1]"
         }`}>
         <div
            className={`flex-1 flex hover:backdrop-blur-0 backdrop-brightness-75  transition-all duration-200 ${
               !changeHandler && "backdrop-brightness-50 backdrop-blur-[4px]"
            }`}>
            <div className={`hover:opacity-100 opacity-0 w-full transition-all  duration-200 flex flex-1 flex-col items-center justify-center ${changeHandler && "scale-[0.9] opacity-100 text-white"}`}>
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
