import React, { useState } from 'react';
import './BlindBox.css';

interface BlindBoxProps {
  items: string[];
}

const BlindBox: React.FC<BlindBoxProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [faces, setFaces] = useState<string[]>([]);

  const handleClick = () => {
    setIsLoading(true);
    setSelectedItem(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const selected = items[randomIndex];
      setSelectedItem(selected);

      // 生成其他面上的内容
      const remainingItems = items.filter(item => item !== selected);
      const shuffledItems = remainingItems.sort(() => 0.5 - Math.random());
      const faceItems = shuffledItems.slice(0, 5);

      setFaces(faceItems);
      setIsLoading(false);
    }, 2000); // Simulate loading time
  };

  return (
    <div className="blind-box">
      <h1>盲盒点餐</h1>
      <button className="blind-box-button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? '抽取中...' : '点击抽盲盒'}
      </button>
      {selectedItem && (
        <div className="blind-box-result-container">
          <div className="blind-box-cube">
            <div className="blind-box-face blind-box-front">{faces[0]}</div>
            <div className="blind-box-face blind-box-back">{faces[1]}</div>
            <div className="blind-box-face blind-box-left">{faces[2]}</div>
            <div className="blind-box-face blind-box-right">{faces[3]}</div>
            <div className="blind-box-face blind-box-top">{faces[4]}</div>
            <div className="blind-box-face blind-box-bottom">{faces[5]}</div>
            <div className="blind-box-face blind-box-selected">{selectedItem}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlindBox;