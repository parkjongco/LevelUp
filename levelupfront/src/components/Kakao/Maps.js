import React, { useEffect, useRef, useState } from 'react';

const Maps = ({ address, onAddressChange }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    //여기에 추가하셈

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapInstance = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 위치 (서울)
          level: 3, // 확대 수준
        });
        setMap(mapInstance);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const addMarker = (lat, lng) => {
    if (marker) {
      marker.setMap(null); // 기존 마커 제거
    }
    const newMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(lat, lng),
    });
    newMarker.setMap(map);
    setMarker(newMarker);
  };

  const handleAddressChange = (e) => {
    const inputAddress = e.target.value;
    onAddressChange(inputAddress);

    // 주소를 기반으로 좌표 검색
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(inputAddress, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const { x, y } = result[0];
        map.setCenter(new window.kakao.maps.LatLng(y, x)); // 지도 중심 이동
        addMarker(y, x); // 마커 추가
      } else {
        alert('주소를 찾을 수 없습니다.');
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="상세 주소를 입력하세요"
        onChange={handleAddressChange}
      />
      <div
        ref={mapRef}
        style={{ width: '100%', height: '400px', marginTop: '10px' }}
      />
    </div>
  );
};

export default Maps;