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

        <div className="navbar place-content-center bg-base-content">
          <div className="flex justify-end flex px-2">
            <div className="flex items-stretch">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn text-white px-20">회원정보</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn text-white px-20">예약목록</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn text-white px-20">내 차 목록</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li> 
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn text-white px-20">즐겨찾기</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};