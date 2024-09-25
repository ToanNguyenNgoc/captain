/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://riseoftheunderdogs.com/', // Thay bằng URL của trang web của bạn
  generateRobotsTxt: true, // Tùy chọn (tự động tạo robots.txt)
  sitemapSize: 5000, // Số lượng URL tối đa trong mỗi file sitemap. Nếu vượt quá số này, sẽ tạo thêm các file sitemap khác.
  changefreq: 'daily', // Tần suất mà các trang của bạn có thể thay đổi.
  priority: 0.7, // Độ ưu tiên của các URL trong sitemap.
  // exclude: ['/secret-page'], // Danh sách các trang bạn muốn loại bỏ khỏi sitemap.
  // robotsTxtOptions: {
  //   // Các tùy chọn bổ sung cho file robots.txt
  //   additionalSitemaps: [
  //     'https://www.yoursite.com/my-custom-sitemap-1.xml', // URL của các sitemap bổ sung
  //     'https://www.yoursite.com/my-custom-sitemap-2.xml',
  //   ],
  // },
}
