export default function Reviews() {
    return ( 
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>date</th>
              <th>name</th>
              <th>title</th>
              <th>rating stars</th>
              <th>more</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
                <th> 2023.04.11</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-1" className="rating-hidden" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-1" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                <th> 2</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-2" className="rating-hidden" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-2" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 3 */}
            <tr>
                <th> 3</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-3" className="rating-hidden" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-3" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 4 */}
            <tr>
                <th> 4</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-4" className="rating-hidden" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-4" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 5 */}
            <tr>
                <th> 5</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-5" className="rating-hidden" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 6 */}
            <tr>
                <th> 6</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-6" className="rating-hidden" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-6" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 7 */}
            <tr>
                <th> 7</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-7" className="rating-hidden" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 7 */}
            <tr>
                <th> 7</th>
                <td>
                    <div className="flex items-center space-x-3">
                    <div>
                    <div className="font-bold">한국타이어</div>
                    <div className="text-sm opacity-50">김유진</div>
                    </div>
                    </div>
                </td>
                <td>
                    처음 이용해보았는데 만족합니다.
                    <br/>
                </td>
                <td><div className="rating rating-md rating-half">
                    <input type="radio" name="rating-7" className="rating-hidden" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-7" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
    </tbody></table>
    <br></br>
    <div className="btn-group flex justify-center ">
        <button className="btn btn-sm btn-outline">1</button>
        <button className="btn btn-sm btn-outline">2</button>
        <button className="btn btn-sm btn-outline">3</button>
        <button className="btn btn-sm btn-disabled btn-outline">...</button>
        <button className="btn btn-sm btn-outline">48</button>
        <button className="btn btn-sm btn-outline">49</button>
        <button className="btn btn-sm btn-outline">50</button>
    </div>
    </div>
        
    )
};
