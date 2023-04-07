export const MapContainer = (level) => {
    const { kakao } = window;
  
    // 지도를 표시할 div
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.553836, 126.969652),
      level: 4
    };
  
    // 지도 생성해서 반환
    return new kakao.maps.Map(container, options);
  };