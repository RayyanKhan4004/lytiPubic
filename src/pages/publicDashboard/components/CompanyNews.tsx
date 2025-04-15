import CompanyNewsCard from "./CompanyNewsCard";
import PublicDashboardNavbar from "./PublicDashboardNavbar";
import { useEffect, useState } from "react";

//icons
import Cardimg from "./assets/Cardimg.svg";
import HomeIcon from "./assets/HomeIcon.svg";
import StadiumIcon from "./assets/StadiumImg.svg";
import UserIcon from "./assets/UserIcon.svg";
import PublicFooter from "./PublicFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsCardData = [
  {
    img: Cardimg,
    userImg: UserIcon,
    userName: "Brian CharlesworthKhan ",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: HomeIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: StadiumIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: Cardimg,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: HomeIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: StadiumIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: Cardimg,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: HomeIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: StadiumIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: Cardimg,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: HomeIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: StadiumIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: Cardimg,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: HomeIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: StadiumIcon,
    userImg: UserIcon,
    userName: "Brian Charlesworth",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "News",
    tags: ["Product Update", "Featured"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses. The company claims the service uses cutting-edge technology to assist in smarter decision-making.",
    buttonTitle: "Read More",
    tags: ["Product Update", "Featured"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description:
      "TechCorp has launched its latest AI service today, aimed at improving data analysis for businesses...",
    buttonTitle: "Read More",
    tags: ["Strategy", "Tips and Tricks"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description: "The NEXT Generation ",
    buttonTitle: "Read More",
    tags: ["Case Study", "SISU Spotlight"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "The NEXT Generation ",
    description: "TechCorp has launched its latest AI service today...",
    buttonTitle: "Read More",
    tags: ["Webinars", "News"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    title: "The NEXT Generation",
    date: "April 14, 2025",
    description: "TechCorp has launched its latest AI service today...",
    buttonTitle: "Read More",
    tags: ["Podcast", "Product Update"],
  },
];
const tagsList = [
  "All",
  "Podcast",
  "News",
  "Webinars",
  "Product Update",
  "Featured",
  "SISU Spotlight",
  "Case Study",
  "Tips and Tricks",
  "Strategy",
];
function CompanyNews() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [tag, setTag] = useState("All");
  const [newsCard, setNewsCard] = useState(newsCardData);

  // Filter logic
  function renderNews() {
    if (tag.includes("All")) {
      setNewsCard(newsCardData);
    } else {
      const filtered = newsCardData.filter((item) => item.tags.includes(tag));
      setNewsCard(filtered);
    }
  }

  useEffect(() => {
    renderNews();
    setPage(1); // Reset to page 1 when tags change
  }, [tag]);

  // Pagination logic (outside renderNews)
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(newsCard.length / pageSize);
  const currentNews = newsCard.slice(startIndex, endIndex);

  const goToPage = (num: any) => {
    num <= totalPages && num !== 0 &&  setPage(num);
   
  };

  return (
    <div>
      <PublicDashboardNavbar />
      <div className="px-[60px] flex flex-col gap-8">
        <h3 className="font-poppin font-semibold text-[32px] leading-[38px] text-[#262626]">
          Latest Articles
        </h3>
        <div>
          {tagsList.map((curr, i) => (
            <button
            onClick={()=> setTag(curr)}
              className={`  ${
                tag == curr
                  ? "bg-[#333333] text-[#F3F3F3]"
                  : "bg-[#F3F3F3] text-[#333333]"
              } p-5 rounded-[10px] text-[22px] font-poppin font-medium mr-[23px] mb-8 `}
            >{curr}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 px-15">
        {currentNews.map((newsCard, index) => (
          <CompanyNewsCard
            key={index}
            img={newsCard.img}
            userImg={newsCard.userImg}
            userName={newsCard.userName}
            date={newsCard.date}
            title={newsCard.title}
            description={newsCard.description}
            buttonTitle={newsCard.buttonTitle}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 my-6">
        <button className="w-[70px] h-[50px] flex justify-center items-center rounded-[8px] bg-[#F3F3F3]"
        onClick={() => {page !== 1 && goToPage( page - 1)}}
        > <ChevronLeft color="#333333"/></button>
       
        {[...Array(totalPages)].map((_, index: any) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded text-[16px] font-medium font-poppin w-[50px] h-[50px]  ${
              page === index + 1 ? "bg-[#333333] text-[#F3F3F3]" : "bg-[#F3F3F3]"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button className="bg-[#333333] w-[70px] h-[50px] flex justify-center items-center rounded-[8px]" 
          onClick={() => goToPage(page + 1)}
        ><ChevronRight color="#F3F3F3"/></button>
        
      </div>
      <PublicFooter hideImage={true}/>
    </div>
  );
}

export default CompanyNews;
