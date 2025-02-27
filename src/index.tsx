import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

const menuItems = [
  '烤鸭',
  '糖醋排骨',
  '红烧肉',
  '麻辣香锅',
  '水煮鱼',
  '麻辣烫',
  '炒饭',
  '炒面',
  '炒河粉',
  '炒粉丝',
  '炒年糕',
  '炒土豆丝',
  '炒青菜',
  '炒西红柿鸡蛋',
  '炒豆芽',
  '炒土豆片',
  '炒茄子',
  '炒苦瓜',
  '炒豆腐',
  '炒藕片',
  '炒青椒',
  '炒红椒',
  '炒黄瓜',
  '炒丝瓜',
  '炒冬瓜',
  '炒西葫芦',
  '炒豇豆',
  '炒菜花',
  '炒西兰花',
  '炒蘑菇',
  '炒木耳',
  '炒金针菇',
  '炒香菇',
  '炒草菇',
  '炒杏鲍菇',
  '炒茭白',
  '炒笋片',
  '炒豆角',
  '炒莴笋',
  '炒芹菜',
  '炒香菜',
  '炒蒜苔',
  '炒蒜苗',
  '炒蒜薹',
  '炒蒜薯',
  '炒蒜蓉',
];


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App items={menuItems} />
  </React.StrictMode>
);