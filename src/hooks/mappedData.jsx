import { useState, useEffect } from 'react';
import imageMap from "../assets/images";
import data from '../data/data.json';

const useMappedData = () => {
  const [mappedData, setMappedData] = useState([]);

  useEffect(() => {
    const mapImages = (data, imageMap) => {
      return data.map(item => ({
        ...item,
        logo: imageMap[item.logo]
      }));
    };

    const mappedData = mapImages(data, imageMap);
    setMappedData(mappedData);
  }, []);

  return mappedData;
};

export default useMappedData;
