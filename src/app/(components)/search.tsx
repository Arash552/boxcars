"use client";
export default function Search() {
  const borderBottom = "border-b-white border-b-2";
  return (
    <section className="gap-y-6 text-center hidden sm:grid">
      <div className="grid place-items-center">
        <div
          className="flex gap-x-2 text-white text-xs cursor-pointer"
          onClick={(e) => {
            const elem = e.target as HTMLElement;

            if (elem.tagName != e.currentTarget.tagName) {
              for (let i = 0; i < e.currentTarget.children.length; i++) {
                const children = e.currentTarget.children[i];
                children.classList.remove("activeSearch");
              }
              elem.classList.add("activeSearch");
            }
          }}
        >
          <p className="activeSearch">All</p>
          <p>New</p>
          <p>Used</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-5 px-5 py-2 bg-white rounded-full cursor-pointer">
        <div className="w-36 text-black text-sm flex justify-between relative group">
          <p>any Brands</p>
          <i className="bi-chevron-down"></i>
          <div className="w-full opacity-0 group-hover:opacity-100 overflow-hidden p-5 grid gap-y-2 absolute top-5 left-0 bg-white text-sm text-black text-start rounded-b-2xl">
            <p>BMW</p>
            <p>Audi</p>
            <p>Ford</p>
            <p>Bentely</p>
            <p>Ferrari</p>
            <p>Toyota</p>
          </div>
        </div>
        <div className="w-36 text-black text-sm flex justify-between group relative">
          <p>any model</p>
          <i className="bi-chevron-down"></i>
          <div className="w-full opacity-0 group-hover:opacity-100 overflow-hidden p-5 grid gap-y-2 absolute top-5 left-0 bg-white text-sm text-black text-start rounded-b-2xl">
            <p>BMW</p>
            <p>Audi</p>
            <p>Ford</p>
            <p>Bentely</p>
            <p>Ferrari</p>
            <p>Toyota</p>
          </div>
        </div>
        <div className="w-36 text-black text-sm flex justify-between group relative">
          <p>Prices :</p>
          <p>All prices</p>
          <div className="w-full opacity-0 group-hover:opacity-100 overflow-hidden p-5 grid gap-y-2 absolute top-5 left-0 bg-white text-sm text-black text-start rounded-b-2xl">
            <p>$10000</p>
            <p>$20000</p>
            <p>$30000</p>
            <p>$40000</p>
            <p>$50000</p>
            <p>$100000</p>
          </div>
        </div>
        <button className="px-5 py-2 text-sm flex justify-center items-center gap-x-2 text-white bg-purple rounded-2xl">
          <i className="bi-search"></i>
          <p>search cars</p>
        </button>
      </div>
    </section>
  );
}
