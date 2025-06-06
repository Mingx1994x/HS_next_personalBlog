import MainBannerLayout from '@/components/banner/MainBannerLayout';
import BannerTitle from '@/components/banner/BannerTitle';
import BlogCard from '@/components/rectCard/BlogCard';
import BlogBannerLayout from '@/components/banner/BlogBannerLayout';

import { blogData, bannerImagesUrl } from '@/data/blogData';

export default function Blog() {
  const { latestBlogData, blogsData } = blogData;
  const { leftSection } = bannerImagesUrl;

  return (
    <>
      <MainBannerLayout
        bannerData={leftSection[0]}
        heightStyle={'fix-height-sm'}
      >
        <BannerTitle mainTitle={'BLOG'} subTitle={'前端工程師 & 職涯諮詢師'} />
      </MainBannerLayout>
      <BlogBannerLayout blogData={latestBlogData} />
      <section className="container">
        <div className="section-spacing">
          <div className="row">
            <div className="col-md-4">
              <div className="search">
                <input
                  type="text"
                  className="search-input form-control pill py-4"
                  placeholder="搜尋你感興趣的文章"
                />
                <button type="button" className="btn search-btn border-0">
                  <i className="bi bi-search fs-4 lh-1"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row row-gap-8 row-gap-md-c-8 mb-10">
            {blogsData.map((blog) => (
              <div className="col-md-6 col-lg-4 h-auto" key={blog.id}>
                <BlogCard cardData={blog} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <ul className="pagination list-unstyled pill">
              <li>
                <i className="bi bi-chevron-left fs-4"></i>
              </li>
              <li className="current-page">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>...</li>
              <li>
                <i className="bi bi-chevron-right fs-4"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
