export default function MyPage() {
  return (
    <div className="overflow-x-auto w-full h-full">
      <div className="avatar h-40 w-full place-content-center">
        <div className="w-24 h-24 rounded-full ml-8 mt-10">
          <img src="/image/profile.png" alt=""/>
        </div>
        <div className="chat chat-start w-80">
          <div className="chat-bubble bg-base-200 text-black w-60 text-center ml-8 mt-10">반가워요🙂 유진 님</div>
        </div>
      </div>
      <div className="divider"></div> 
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">dhjslafr</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
        
        </div>
  )
};
