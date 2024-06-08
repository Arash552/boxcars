'use client'
export default function AddFavorite(){
  return(
    <i className="bi-bookmark w-8 h-8 rounded-full text-sm text-black bg-white grid place-items-center cursor-pointer" onClick={(e)=>{
      if(e.currentTarget.classList.contains("bi-bookmark")){
        e.currentTarget.classList.replace("bi-bookmark" , "bi-bookmark-fill")
      }else{
        e.currentTarget.classList.replace("bi-bookmark-fill" , "bi-bookmark")
      }
    }}></i>
  )
}