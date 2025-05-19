import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">關於我</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden bg-muted max-w-sm mx-auto">
              {/* 這裡可放置個人照片 */}
              <div className="h-full w-full flex items-center justify-center text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">張三</h3>
            <p className="text-neutral-300 mb-6">
              我是一名熱情的前端開發者，擁有 5 年的專業經驗。從事於打造直覺且具吸引力的使用者界面，同時確保卓越的使用者體驗。我熱愛學習新技術並解決複雜問題。
            </p>
            <p className="text-neutral-300 mb-6">
              我擁有電腦科學學士學位，專精於網頁開發和使用者體驗設計。除了技術能力外，我也重視團隊合作和有效溝通，確保能夠與各種團隊成員順暢協作。
            </p>
            <p className="text-neutral-300">
              在工作之餘，我喜歡參與開源專案、撰寫技術文章並參加科技社群活動。我相信持續學習和知識分享對個人成長和專業發展至關重要。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
