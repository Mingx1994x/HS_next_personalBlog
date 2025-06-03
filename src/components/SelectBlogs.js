'use client'
import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

import BlogCard from './BlogCard';

export default function SelectBlogs() {

  const [selectBlogsData, setSelectBlogsData] = useState([
    {
      "id": 0,
      "date": "2024/10/21",
      "images": {
        "mobile": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/mobile/blog-content/About%20Section.png",
        "desktop": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog-content/About%20Section.png"
      },
      "tags": ["#前端開發", "#職涯成長"],
      "statusTag": "最新文章",
      "title": "自學前端不用怕：從零開始的三大關鍵",
      "content": "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
      "isPopular": false
    },
    {
      "id": 5,
      "date": "2024/07/08",
      "images": {
        "mobile": "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo4.png?raw=true",
        "desktop": "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo3.png?raw=true"
      },
      "tags": ["#面試準備", "#工程師求職"],
      "statusTag": "人氣文章",
      "title": "前端面試不再慌：破解常見提問的三大策略",
      "content": "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
      "isPopular": true
    },
    {
      "id": 3,
      "date": "2024/09/03",
      "images": {
        "mobile": "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo2.png?raw=true",
        "desktop": "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true"
      },
      "tags": ["#CSS設計", "#視覺體驗"],
      "statusTag": "",
      "title": "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
      "content": "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
      "isPopular": false
    },
    {
      id: 2,
      date: '2024/09/07',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo1.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo1.png?raw=true',
      },
      tags: ['#作品集', '#求職攻略'],
      statusTag: '',
      title: '前端作品集打造指南：讓你的專案成為履歷亮點',
      content:
        '對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。',
      isPopular: false,
    }
  ]);

  const swiperRef = useRef(null);
  const buttonPrevRef = useRef(null);
  const buttonNextRef = useRef(null);

  useEffect(() => {
    console.log(buttonNextRef.current, buttonPrevRef.current);

  }, [buttonNextRef, buttonPrevRef])

  useEffect(() => {
    if (swiperRef.current &&
      buttonPrevRef.current &&
      buttonNextRef.current &&
      swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = buttonPrevRef.current;
      swiperRef.current.params.navigation.nextEl = buttonNextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef])

  return (
    <div className='blog-select-swiper'>
      <Swiper className="mySwiper"
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          }
        }}
        navigation={{
          nextEl: buttonNextRef.current,
          prevEl: buttonPrevRef.current,
        }}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          console.log(swiperRef);

        }}
      >
        {
          selectBlogsData.map((blogData) => (
            <SwiperSlide
              key={blogData.id}
              className='h-auto'
            >
              <BlogCard
                cardData={blogData}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className='mt-8' style={{
        height: '44px'
      }}>
        <div className="swiper-button-prev" ref={buttonPrevRef}>
        </div>
        <div className="swiper-button-next" ref={buttonNextRef}>
        </div>
      </div>
    </div >
  )
}