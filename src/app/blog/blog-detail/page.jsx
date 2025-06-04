import BlogBannerLayout from '@/components/banner/BlogBannerLayout';
import BlogDetailContext from '@/components/BlogDetailContext';

export default function BlogDetail() {
  const blogsData = [
    {
      id: 0,
      date: '2024/10/21',
      images: {
        mobile:
          'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/mobile/blog-content/About%20Section.png',
        desktop:
          'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog-content/About%20Section.png',
      },
      tags: ['#前端開發', '#職涯成長'],
      statusTag: '最新文章',
      title: '自學前端不用怕：從零開始的三大關鍵',
      content:
        '嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！',
      isPopular: false,
    },
    {
      id: 1,
      date: '2024/10/11',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo10.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo4.png?raw=true',
      },
      tags: ['#React', '#入門基礎'],
      statusTag: '',
      title: 'React 入門不再迷惘：三步驟帶你上手核心概念',
      content:
        '你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。',
      isPopular: false,
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
    },
    {
      id: 3,
      date: '2024/09/03',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo2.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true',
      },
      tags: ['#CSS設計', '#視覺體驗'],
      statusTag: '',
      title: 'CSS 魔法大揭密：排版與設計的三大關鍵技巧',
      content:
        '在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。',
      isPopular: false,
    },
    {
      id: 4,
      date: '2024/07/09',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo3.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo6.png?raw=true',
      },
      tags: ['#轉職工程師', '#學習心法'],
      statusTag: '',
      title: '前端轉職必讀：從自學者到工程師的心路歷程',
      content:
        '能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。',
      isPopular: false,
    },
    {
      id: 5,
      date: '2024/07/08',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo4.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo3.png?raw=true',
      },
      tags: ['#面試準備', '#工程師求職'],
      statusTag: '人氣文章',
      title: '前端面試不再慌：破解常見提問的三大策略',
      content:
        '面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。',
      isPopular: true,
    },
    {
      id: 6,
      date: '2024/06/29',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo5.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo5.png?raw=true',
      },
      tags: ['#Vue3', '#框架學習'],
      statusTag: '',
      title: 'Vue 3 新手指南：快速掌握 Composition API 與關鍵特色',
      content:
        '許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。',
      isPopular: false,
    },
    {
      id: 7,
      date: '2024/05/04',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo6.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo9.png?raw=true',
      },
      tags: ['#Git', '#協作流程'],
      statusTag: '',
      title: 'Git 與版本控制：前端協作的必修課',
      content:
        '當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。',
      isPopular: false,
    },
    {
      id: 8,
      date: '2024/05/01',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo7.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo7.png?raw=true',
      },
      tags: ['#SEO', '#網頁曝光'],
      statusTag: '',
      title: 'SEO 與前端最佳實踐：讓搜尋引擎看見你的網站',
      content:
        '即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。',
      isPopular: false,
    },
    {
      id: 9,
      date: '2024/02/17',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo8.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo8.png?raw=true',
      },
      tags: ['#專案維護', '#自動化測試'],
      statusTag: '',
      title: '穩定前端環境的祕訣：依賴管理與自動化流程',
      content:
        '前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。',
      isPopular: false,
    },
    {
      id: 10,
      date: '2024/02/17',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo9.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo11.png?raw=true',
      },
      tags: ['#TypeScript', '#程式設計'],
      statusTag: '',
      title: 'TypeScript 快速上手：強化前端程式碼的安全與可讀性',
      content:
        '許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。',
      isPopular: false,
    },
    {
      id: 11,
      date: '2024/02/07',
      images: {
        mobile:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo11.png?raw=true',
        desktop:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo10.png?raw=true',
      },
      tags: ['#測試框架', '#品質保證'],
      statusTag: '',
      title: '掌握前端測試：從單元測試到端對端測試的完整攻略',
      content:
        '寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。',
      isPopular: false,
    },
  ];

  const details = {
    introduction: [
      '嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」',
      '其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！',
    ],
    sections: [
      {
        title: '打好基礎：HTML、CSS、JavaScript',
        images: {
          mobile:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/mobile/blog-content/content1.png',
          desktop:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog-content/content1.png',
        },
      },
      {
        title: '擅用主流框架與工具',
        images: {
          mobile:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/mobile/blog-content/content2.png',
          desktop:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog-content/content2.png',
        },
      },
      {
        title: '持續練習與參與社群',
        images: {
          mobile:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/mobile/blog-content/content3.png',
          desktop:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog-content/content3.png',
        },
      },
    ],
    conclusion: {
      title: '結語',
      images: {
        mobile:
          'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/mobile/blog-content/content4.png',
        desktop:
          'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog-content/content4.png',
      },
    },
    readingMore: [
      {
        id: '5',
        title: '前端面試不再慌：破解常見提問的三大策略',
      },
      {
        id: '11',
        title: '掌握前端測試：從單元測試到端對端測試的完整攻略',
      },
      {
        id: '8',
        title: 'SEO 與前端最佳實踐：讓搜尋引擎看見你的網站',
      },
    ],
  };

  return (
    <>
      <BlogBannerLayout blogData={blogsData[0]} hasContent={false} />

      <div className="section-spacing">
        <div className="container">
          <main className="row d-flex mb-12">
            <div className="col-xl-5 col-md-7 mx-auto blog-detail">
              {/* 前言 */}
              <div className="context">
                <h2 className="blog-detail-title text-primary">前言</h2>
                {details.introduction.map((intro, index) => (
                  <p key={index}>{intro}</p>
                ))}
              </div>
              {/* 內文 */}
              <div className="context">
                <BlogDetailContext contextData={details.sections[0]}>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">HTML 與語意化</h3>
                    <p className="mb-2">
                      為何重要：HTML 是網頁結構的根基，語意化寫法（如 header,
                      main, footer 等）能讓網頁更具可維護性與 SEO 效益。
                    </p>
                    <p>建議作法</p>
                    <ol>
                      <li>
                        學習常見標籤的用途與屬性，如&lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
                      </li>
                      <li>
                        善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。
                      </li>
                    </ol>
                  </div>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">CSS 佈局與預處理器</h3>
                    <p className="mb-2">
                      為何重要：好看的網站來自穩定的排版與佈局，掌握
                      Flexbox、Grid 能讓你隨心所欲打造響應式頁面。
                    </p>
                    <p>建議作法</p>
                    <ol>
                      <li>
                        先掌握基礎 CSS 後，再學習 SASS 或 LESS
                        這類預處理器，提升樣式開發效率。
                      </li>
                      <li>
                        善用<span className="text-primary"> CSS-Tricks </span>
                        等資源，了解常見版型技巧。
                      </li>
                    </ol>
                  </div>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">
                      JavaScript 核心觀念
                    </h3>
                    <p className="mb-2">
                      為何重要：互動效果、資料處理、前端邏輯都仰賴 JavaScript。
                    </p>
                    <p>建議作法</p>
                    <ol>
                      <li>
                        先打穩 ES5 與 ES6 語法基礎，理解閉包 (Closure)、原型鍊
                        (Prototype) 等核心機制。
                      </li>
                      <li>
                        學會事件監聽、API 資料串接等常見應用，增添網站互動性。
                      </li>
                    </ol>
                  </div>
                  <p className="blog-detail-tip">
                    小結：在學習基礎語法時，同步進行小專案實作（如 Todo
                    List、計算機、切版作品集）會讓你進步更快，也能累積展示用作品。
                  </p>
                </BlogDetailContext>
              </div>
              <div className="context">
                <BlogDetailContext contextData={details.sections[1]}>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">
                      React、Vue 先挑一個
                    </h3>
                    <ul>
                      <li>
                        React：生態系豐富、社群支援強，適合喜歡客製化的工程師。
                      </li>
                      <li>
                        Vue：上手容易、檔案結構直覺，適合對「漸進式開發」有興趣的開發者。
                      </li>
                    </ul>
                  </div>
                  <p className="blog-detail-tip mb-6">
                    TIP：可以先看官方文件或跟著基礎教學做出小專案，感受哪個框架更順手。
                  </p>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">
                      版本控制、協作與建置
                    </h3>
                    <ul>
                      <li>
                        Git 與 GitHub：一定要掌握分支、Pull Request、Code Review
                        等流程，並熟悉 Git Flow 或 Trunk Based Development。
                      </li>
                      <li>
                        打包工具：了解 Webpack、Vite、Parcel
                        等常見工具的基本原理與設定，對於優化與部署大有幫助。
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">
                      自動化測試與最佳實踐
                    </h3>
                    <ul>
                      <li>
                        測試框架：Jest、Mocha、Cypress 等，建立單元測試與 E2E
                        測試思維。
                      </li>
                      <li>
                        程式結構與品質：遵循程式風格
                        (Lint)、維持命名規範、模組化思考，確保專案可維護。
                      </li>
                    </ul>
                  </div>
                </BlogDetailContext>
              </div>
              <div className="context">
                <BlogDetailContext contextData={details.sections[2]}>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">
                      多參加前端挑戰 / Hackathon
                    </h3>
                    <ul>
                      <li>在實作中快速累積經驗，也能認識更多同好。</li>
                      <li>提供多種真實設計稿，可練習切版與互動。</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">打造個人作品集網站</h3>
                    <ul>
                      <li>部署在 GitHub Pages 或其他免費/付費主機。</li>
                      <li>
                        整合自己做過的小專案，並用文字介紹技術棧與實作細節。
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="blog-detail-subtitle">社群互動、分享心得</h3>
                    <ul>
                      <li>
                        參與線上或線下的技術交流、讀書會、Meetup，與同行討論，能啟發更多想法。
                      </li>
                      <li>
                        有餘力可將學習過程寫成部落格文章或筆記，進一步強化自己的理解。
                      </li>
                    </ul>
                  </div>
                </BlogDetailContext>
              </div>
              {/* 結語 */}
              <div className="context">
                <BlogDetailContext contextData={details.conclusion}>
                  <p className="mb-6">
                    自學前端可能遇到卡關、挫折，但同時也具備很高的自主性。只要把
                    基礎、框架、實踐
                    三大面向做好，就能在前端這條路上穩步前進。若你在學習過程中需要更多建議或想要職涯諮詢，歡迎透過
                    <a
                      className="link-primary text-decoration-underline"
                      href="mailto:alysewang@hexschool.com"
                    >
                      聯絡方式
                    </a>
                    與我聯繫！
                  </p>
                  <p className="blog-detail-tip mb-6">
                    「程式替你開路，諮詢替你指路，一起走向更寬廣的未來。」
                  </p>
                  <p>
                    感謝你的閱讀，如果這篇文章對你有幫助，別忘了幫忙分享，或在下方留言告訴我你的想法，也讓更多人一起受益吧！
                  </p>
                </BlogDetailContext>
              </div>
              {/* 延伸閱讀 */}
              <div className="context">
                <h2 className="blog-detail-title text-primary">延伸閱讀</h2>
                <ul>
                  <li>前端面試不再慌：破解常見提問的三大策略</li>
                  <li>掌握前端測試：從單元測試到端對端測試的完整攻略</li>
                  <li>SEO 與前端最佳實踐：讓搜尋引擎看見你的網站</li>
                </ul>
              </div>
            </div>
          </main>
          <section className="container">
            <div className="row d-flex">
              <div className="col-md-7 col-xl-5 mx-auto d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-secondary pill d-flex align-items-center"
                >
                  <i className="bi bi-chevron-left fs-4 me-1"></i>
                  上一篇
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary pill d-flex align-items-center"
                >
                  下一篇
                  <i className="bi bi-chevron-right fs-4 ms-1"></i>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
