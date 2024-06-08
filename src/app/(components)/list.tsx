"use client";
export default function List({ items , color}: { items: string[] , color : string}) {
  const arr: any[] = [];
  var border : string;
  if(color == "black"){
    border = "borderC"
  }else{
    border = "[#ffffff20]"
  }
  if (items) {
    items.forEach((item , index) => {
      if(index == 0){
        arr.push(<p className="border-b-2 border-purple pb-1">{item}</p>)
      }else{
        arr.push(<p className="border-purple pb-1">{item}</p>);
      }
      
    });
  }
  return (
    <div className={`flex gap-x-5 text-${color} text-sm cursor-pointer border-b-2 border-${border}`} onClick={(e) => {
      const elem = e.target as HTMLElement;

      if (elem.tagName != e.currentTarget.tagName) {
        for (let i = 0; i < e.currentTarget.children.length; i++) {
          const children = e.currentTarget.children[i];
          children.classList.remove("border-b-2");
        }
        elem.classList.add("border-b-2");
      }
    }}>
      {arr}
    </div>
  );
}
