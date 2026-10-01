export type ServiceTechnique = {
  title: string;
  description: string;
};

export type ServiceExtra = {
  heading: string;
  items: { title: string; description: string }[];
};

export type Service = {
  index: string;
  slug: string;
  title: string;
  // e.g. "FPV — IMMERSIVE FLIGHT EXPERIENCE"
  eyebrow: string;
  // short one-line summary, used in compact contexts
  summary: string;
  // full description, one paragraph per entry
  description: string[];
  // the "<Service> Production" breakdown
  techniques: ServiceTechnique[];
  // tag list — "<Service> phù hợp với" / "Ứng dụng"
  applications?: string[];
  // a secondary list that doesn't fit "techniques" or "applications"
  // (process flow, rollout options, value props, goal statement...)
  extra?: ServiceExtra;
  media: {
    type: "video" | "image" | "youtube";
    src: string;
    poster?: string;
  };
};

export const services: Service[] = [
  {
    index: "01",
    slug: "fpv",
    title: "FPV",
    eyebrow: "FPV — Immersive Flight Experience",
    summary: "Dynamic aerial cinematography built around how a flight path serves the story.",
    description: [
      "FPV mở ra một góc nhìn hoàn toàn khác bằng khả năng chuyển động tự do, linh hoạt và giàu cảm xúc. Không bị giới hạn bởi những chuyển động máy quay truyền thống, FPV có thể đưa người xem xuyên qua không gian, bám sát chủ thể, chuyển hướng liên tục và tạo nên cảm giác như đang trực tiếp bước vào trong khung hình.",
      "Tại Sky Moment, FPV không chỉ được sử dụng để tạo ra những shot bay nhanh hay kỹ thuật. Chúng tôi tập trung vào cách đường bay phục vụ câu chuyện, kết hợp tốc độ, khoảng cách, độ cao, chuyển hướng và nhịp chuyển động để tạo nên những thước phim có chủ đích.",
      "Từ một khu nghỉ dưỡng, khách sạn, showroom, nhà hàng, sân vận động cho đến những sự kiện quy mô lớn, FPV có thể biến một không gian thông thường thành một trải nghiệm hình ảnh sống động.",
    ],
    techniques: [
      { title: "Fly-through", description: "Bay xuyên qua các không gian, cửa, hành lang, kiến trúc hoặc những khu vực có cấu trúc phức tạp để tạo cảm giác liền mạch và immersive." },
      { title: "Tracking Shot", description: "Bám theo xe, vận động viên, người mẫu, phương tiện hoặc nhân vật, tạo cảm giác chuyển động mạnh mẽ và trực tiếp." },
      { title: "One Shot", description: "Thiết kế những cú máy dài liên tục, kết nối nhiều không gian và hành động trong cùng một chuyển động." },
      { title: "Reveal Shot", description: "Ẩn chủ thể hoặc không gian ở phần đầu shot, sau đó mở ra một góc nhìn mới để tạo hiệu ứng bất ngờ." },
      { title: "Orbit & Dynamic Movement", description: "Di chuyển vòng quanh chủ thể hoặc kết hợp nhiều trục chuyển động để tạo chiều sâu và năng lượng cho hình ảnh." },
      { title: "FPV Event & Performance", description: "Ghi lại sự kiện, sân khấu, thể thao, biểu diễn và những khoảnh khắc có tốc độ cao từ góc nhìn khác biệt." },
    ],
    applications: ["TVC", "Commercial", "Automotive", "Real Estate", "Hotel", "Resort", "Yacht", "Tourism", "Sports", "Event", "Music Video", "Social Media", "Brand Campaign"],
    media: { type: "youtube", src: "https://youtu.be/EoPnQxhHdA4" },
  },
  {
    index: "02",
    slug: "flycam",
    title: "Flycam",
    eyebrow: "Flycam — A New Perspective From Above",
    summary: "Aerial coverage built around composition, light, and a subject's relationship to its surroundings.",
    description: [
      "Flycam mang đến khả năng mở rộng không gian của hình ảnh. Một địa điểm, một công trình hay một sự kiện khi được nhìn từ trên cao có thể trở thành một câu chuyện hoàn toàn khác.",
      "Sky Moment xây dựng các đường bay dựa trên bố cục, ánh sáng, chuyển động và mối quan hệ giữa chủ thể với không gian xung quanh. Thay vì chỉ ghi lại một địa điểm từ trên cao, chúng tôi tìm kiếm những góc nhìn có khả năng truyền tải quy mô, vẻ đẹp và cảm xúc của không gian.",
      "Phong cách hình ảnh của Sky Moment hướng đến sự mượt mà, gần gũi và có chủ đích. Độ cao, tốc độ và chuyển động của flycam được lựa chọn phù hợp với từng câu chuyện thay vì sử dụng một công thức cố định.",
    ],
    techniques: [
      { title: "Aerial Establishing Shot", description: "Giới thiệu toàn cảnh địa điểm, khu nghỉ dưỡng, công trình hoặc sự kiện." },
      { title: "Aerial Tracking", description: "Theo sát chuyển động của phương tiện, con người, tàu thuyền hoặc các hoạt động ngoài trời." },
      { title: "Aerial Reveal", description: "Sử dụng chuyển động của flycam để dần hé lộ một công trình, cảnh quan hoặc chủ thể." },
      { title: "Orbit Shot", description: "Bay vòng quanh chủ thể để tạo chiều sâu và nhấn mạnh kiến trúc hoặc cảnh quan." },
      { title: "Top-down / Bird's Eye View", description: "Góc nhìn trực diện từ trên xuống, phù hợp với những bố cục đặc biệt, hoạt động tập thể và cảnh quan." },
      { title: "Cinematic Aerial", description: "Những chuyển động chậm, ổn định và giàu tính điện ảnh, phù hợp với resort, yacht, wedding, tourism và luxury branding." },
    ],
    applications: ["Real Estate", "Resort", "Hotel", "Villa", "Yacht", "Tourism", "Wedding", "Automotive", "Architecture", "Landscape", "Event", "Commercial", "Corporate"],
    media: { type: "youtube", src: "https://youtu.be/Q5_WBWHFPPo" },
  },
  {
    index: "03",
    slug: "photographer",
    title: "Photo",
    eyebrow: "Photo — Capture The Details",
    summary: "Commercial photography that holds the detail video sometimes can't replace.",
    description: [
      "Photography là cách thương hiệu lưu giữ những chi tiết mà video đôi khi không thể thay thế. Một bức ảnh thương mại cần nhiều hơn việc tạo ra một hình ảnh đẹp. Nó phải thể hiện được chất lượng sản phẩm, không gian, con người và tinh thần thương hiệu trong một khoảnh khắc duy nhất.",
      "Sky Moment cung cấp dịch vụ photography dành cho thương hiệu, doanh nghiệp, sản phẩm, không gian và sự kiện. Chúng tôi chú trọng đến ánh sáng, bố cục, màu sắc, góc máy và cách hình ảnh được sử dụng trên thực tế.",
    ],
    techniques: [
      { title: "Product Photography", description: "Hình ảnh sản phẩm phục vụ website, catalogue, advertising và social media." },
      { title: "Lifestyle Photography", description: "Đưa sản phẩm và thương hiệu vào những bối cảnh đời sống tự nhiên để tạo cảm giác gần gũi và giàu cảm xúc." },
      { title: "Architecture & Interior", description: "Tập trung vào đường nét kiến trúc, nội thất, ánh sáng và không gian." },
      { title: "Hotel & Resort Photography", description: "Ghi lại phòng nghỉ, tiện ích, cảnh quan, dịch vụ và trải nghiệm khách hàng." },
      { title: "Event Photography", description: "Ghi lại những khoảnh khắc quan trọng, nhân vật, sân khấu, hoạt động và không khí của sự kiện." },
      { title: "Portrait & Personal Branding", description: "Hình ảnh cá nhân dành cho doanh nhân, nghệ sĩ, KOL, nhân sự cấp cao và thương hiệu cá nhân." },
      { title: "Aerial Photography", description: "Kết hợp flycam với photography mặt đất để tạo nên bộ hình ảnh hoàn chỉnh về không gian và địa điểm." },
    ],
    applications: ["Website", "Social Media", "Advertising", "Catalogue", "Brochure", "PR", "Brand Campaign", "Real Estate", "Hospitality", "Tourism", "Corporate"],
    media: { type: "image", src: "/images/services/photographer.jpg" },
  },
  {
    index: "04",
    slug: "videographer",
    title: "Video",
    eyebrow: "Video — Turn Moments Into Stories",
    summary: "Production combining cinematography, FPV, flycam, handheld and gimbal into one story.",
    description: [
      "Video là sự kết hợp giữa hình ảnh, chuyển động, âm thanh, nhịp điệu và cảm xúc. Một video tốt không đơn thuần là tập hợp những cảnh quay đẹp. Các shot phải được kết nối để tạo ra một câu chuyện có mở đầu, cao trào và điểm kết thúc.",
      "Sky Moment cung cấp giải pháp video production từ quy mô nhỏ đến commercial production, kết hợp cinematography, FPV, flycam, handheld, gimbal và các phương pháp quay chuyên nghiệp để tạo nên hình ảnh phù hợp với từng dự án.",
    ],
    techniques: [
      { title: "Brand Video", description: "Giới thiệu thương hiệu, câu chuyện, giá trị và hình ảnh doanh nghiệp." },
      { title: "Commercial Video", description: "Video quảng bá sản phẩm, dịch vụ hoặc chiến dịch marketing." },
      { title: "Event Recap", description: "Tái hiện không khí, cảm xúc và những khoảnh khắc nổi bật của sự kiện." },
      { title: "Corporate Video", description: "Video giới thiệu doanh nghiệp, hoạt động, đội ngũ và quy mô tổ chức." },
      { title: "Social Media Video", description: "Nội dung video ngắn được thiết kế cho Facebook, Instagram, TikTok, YouTube Shorts và các nền tảng digital." },
      { title: "Hospitality Video", description: "Video dành cho khách sạn, resort, villa, nhà hàng, yacht và các sản phẩm du lịch." },
    ],
    extra: {
      heading: "Quy trình",
      items: [
        { title: "Concept", description: "Phát triển ý tưởng và thông điệp." },
        { title: "Pre-production", description: "Shot list, storyboard, lên kế hoạch sản xuất." },
        { title: "Production", description: "Quay phim với cinematography, FPV, flycam." },
        { title: "Editing", description: "Dựng hình, xây dựng nhịp điệu câu chuyện." },
        { title: "Sound Design", description: "Âm thanh, nhạc nền, hiệu ứng." },
        { title: "Color Grading", description: "Điều chỉnh màu sắc, tông phim." },
        { title: "Final Delivery", description: "Xuất bản và bàn giao sản phẩm hoàn thiện." },
      ],
    },
    media: { type: "image", src: "/images/services/videographer.jpg" },
  },
  {
    index: "05",
    slug: "tvc",
    title: "TVC",
    eyebrow: "TVC — Cinematic Commercial Production",
    summary: "Full-service commercial production, from creative concept to final mastering.",
    description: [
      "TVC là hình thức truyền tải thương hiệu thông qua một câu chuyện được xây dựng có chủ đích. Một TVC hiệu quả cần đồng thời giải quyết nhiều yếu tố: ý tưởng, hình ảnh, thông điệp, nhịp dựng, âm thanh, màu sắc và nhận diện thương hiệu.",
      "Sky Moment cung cấp giải pháp sản xuất TVC từ giai đoạn phát triển ý tưởng đến sản phẩm hoàn thiện. Chúng tôi có thể kết hợp cinematography, FPV, flycam, photography, lighting, motion và post-production trong cùng một production.",
    ],
    techniques: [
      { title: "Creative Concept", description: "Phát triển ý tưởng hình ảnh dựa trên sản phẩm và thông điệp thương hiệu." },
      { title: "Visual Development", description: "Xây dựng phong cách hình ảnh, màu sắc, camera movement và visual language." },
      { title: "Pre-production", description: "Shot list, storyboard, location scouting, production planning và chuẩn bị thiết bị." },
      { title: "Production", description: "Quay phim với hệ thống camera chuyên nghiệp, gimbal, FPV, flycam và các thiết bị hỗ trợ." },
      { title: "Post-production", description: "Editing, sound design, color grading, visual effects và final mastering." },
    ],
    applications: ["Automotive", "Real Estate", "Hospitality", "Tourism", "F&B", "Fashion", "Lifestyle", "Technology", "Corporate", "Product Launch"],
    media: { type: "image", src: "/images/services/tvc.jpg" },
  },
  {
    index: "06",
    slug: "branding",
    title: "Branding",
    eyebrow: "Branding — Building A Visual Language",
    summary: "A consistent visual system a brand can use across every touchpoint.",
    description: [
      "Một thương hiệu mạnh không chỉ được nhận diện bằng logo. Khách hàng ghi nhớ thương hiệu thông qua hình ảnh, màu sắc, chuyển động, âm thanh, con người và cảm xúc mà thương hiệu tạo ra.",
      "Sky Moment cung cấp các giải pháp visual content hỗ trợ doanh nghiệp xây dựng hình ảnh thương hiệu nhất quán và chuyên nghiệp. Chúng tôi kết hợp photography, videography, FPV, flycam và creative production để tạo ra một hệ thống hình ảnh có thể sử dụng xuyên suốt các kênh truyền thông.",
    ],
    techniques: [
      { title: "Brand Film", description: "Một câu chuyện hình ảnh giới thiệu tinh thần và giá trị thương hiệu." },
      { title: "Brand Photography", description: "Bộ hình ảnh nhận diện phục vụ website, social media và truyền thông." },
      { title: "Visual Campaign", description: "Phát triển hình ảnh cho các chiến dịch marketing và product launch." },
      { title: "Corporate Image", description: "Hình ảnh doanh nghiệp, văn phòng, nhân sự và hoạt động kinh doanh." },
      { title: "Personal Branding", description: "Xây dựng hình ảnh chuyên nghiệp cho founder, executive, artist, KOL và creator." },
      { title: "Hospitality Branding", description: "Xây dựng visual identity cho hotel, resort, restaurant, yacht và destination." },
    ],
    extra: {
      heading: "Mục tiêu",
      items: [
        { title: "One brand. One visual language. Multiple touchpoints.", description: "Tạo nên một hệ thống hình ảnh nhất quán để khách hàng có thể nhận diện thương hiệu ở bất kỳ điểm tiếp xúc nào." },
      ],
    },
    media: { type: "image", src: "/images/services/branding.jpg" },
  },
  {
    index: "07",
    slug: "marketing",
    title: "Marketing",
    eyebrow: "Marketing — Content Designed For Attention",
    summary: "Visual content systems built for campaigns, not just a single video.",
    description: [
      "Trong môi trường digital, thương hiệu chỉ có một khoảng thời gian rất ngắn để thu hút sự chú ý. Một chiến dịch marketing hiệu quả cần hình ảnh đủ mạnh để khiến khách hàng dừng lại, đủ rõ ràng để truyền tải thông điệp và đủ cảm xúc để khiến họ muốn tìm hiểu thêm.",
      "Sky Moment cung cấp các giải pháp visual content production phục vụ marketing, advertising và social media. Chúng tôi không chỉ sản xuất một video riêng lẻ mà có thể xây dựng một hệ thống nội dung gồm nhiều định dạng cho toàn bộ campaign.",
    ],
    techniques: [
      { title: "Campaign Video", description: "Video chủ đạo cho chiến dịch marketing." },
      { title: "Social Media Content", description: "Nội dung ngắn dành cho Facebook, Instagram, TikTok và YouTube." },
      { title: "Short-form Video", description: "Reels, Shorts, TikTok và vertical video." },
      { title: "Product Content", description: "Hình ảnh và video giới thiệu sản phẩm." },
      { title: "Event Content", description: "Nội dung được sản xuất và bàn giao nhanh để phục vụ truyền thông trong và sau sự kiện." },
      { title: "Advertising Content", description: "Video và hình ảnh dành cho paid media và digital advertising." },
      { title: "Hero Content", description: "Một sản phẩm hình ảnh chủ đạo làm trung tâm cho toàn bộ chiến dịch." },
    ],
    extra: {
      heading: "Có thể triển khai theo",
      items: [
        { title: "01 — One Campaign", description: "Một chiến dịch, một visual concept." },
        { title: "02 — Multiple Formats", description: "Một concept được phát triển thành nhiều định dạng." },
        { title: "03 — Multiple Platforms", description: "Tối ưu nội dung cho từng nền tảng." },
        { title: "04 — Long-term Content", description: "Xây dựng hệ thống nội dung hình ảnh dài hạn cho thương hiệu." },
      ],
    },
    media: { type: "image", src: "/images/services/marketing.jpg" },
  },
  {
    index: "08",
    slug: "vr360-tour",
    title: "VR360 Tour",
    eyebrow: "VR360 — Experience The Space",
    summary: "Immersive 360° tours that let viewers explore a space on their own terms.",
    description: [
      "Có những không gian không thể được truyền tải đầy đủ chỉ bằng một bức ảnh hoặc video. VR360 cho phép người xem chủ động khám phá không gian theo góc nhìn của chính mình, tạo ra cảm giác trực quan và tương tác cao hơn so với hình ảnh truyền thống.",
      "Sky Moment cung cấp giải pháp chụp và xây dựng nội dung VR360 cho các không gian thương mại, du lịch, hospitality và bất động sản.",
    ],
    techniques: [
      { title: "360° Photography", description: "Chụp toàn cảnh không gian theo góc nhìn 360 độ." },
      { title: "Virtual Tour", description: "Xây dựng tour tham quan trực tuyến với nhiều điểm tương tác." },
      { title: "Interactive Hotspots", description: "Tạo các điểm thông tin để người xem khám phá sản phẩm, dịch vụ hoặc khu vực." },
      { title: "360° Property Tour", description: "Cho phép khách hàng tham quan bất động sản từ xa." },
      { title: "Hotel & Resort Tour", description: "Khám phá phòng nghỉ, nhà hàng, hồ bơi, bãi biển và các tiện ích." },
      { title: "Yacht & Vehicle Tour", description: "Trải nghiệm nội thất và không gian của yacht, xe hoặc các phương tiện đặc thù." },
    ],
    applications: ["Real Estate", "Hotel", "Resort", "Villa", "Yacht", "Restaurant", "Showroom", "Museum", "Tourism", "Event Venue", "Commercial Space"],
    extra: {
      heading: "VR360 mang lại",
      items: [
        { title: "Explore", description: "Khách hàng chủ động khám phá không gian." },
        { title: "Engage", description: "Tăng mức độ tương tác với sản phẩm." },
        { title: "Experience", description: "Tạo cảm giác trải nghiệm trước khi khách hàng đến trực tiếp." },
        { title: "Convert", description: "Hỗ trợ khách hàng hiểu rõ sản phẩm trước khi đưa ra quyết định." },
      ],
    },
    media: { type: "image", src: "/images/services/vr360.jpg" },
  },
];
