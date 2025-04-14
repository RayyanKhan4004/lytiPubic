import CompanyNewsCard from "./CompanyNewsCard";
import PublicDashboardNavbar from "./PublicDashboardNavbar";
import { useEffect, useState } from "react";

//icons
import Cardimg from "./assets/Cardimg.svg"

const newsCardData = [
  {
    img: Cardimg,
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
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
    title: "TechCorp Launches New AI Service",
    description: "TechCorp has launched its latest AI service today...",
    buttonTitle: "Read More",
    tags: ["Case Study", "SISU Spotlight"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "TechCorp Launches New AI Service",
    description: "TechCorp has launched its latest AI service today...",
    buttonTitle: "Read More",
    tags: ["Webinars", "News"],
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-4d3a912b5f87",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Ali Khan",
    date: "April 14, 2025",
    title: "TechCorp Launches New AI Service",
    description: "TechCorp has launched its latest AI service today...",
    buttonTitle: "Read More",
    tags: ["Podcast", "Product Update"],
  },
  // ... repeat for all items with varied tag combinations
];

function CompanyNews() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [tag, setTag] = useState(["Featured"]);
    const [newsCard, setNewsCard] = useState(newsCardData);
  
    // Filter logic
    function renderNews() {
      if (tag.includes("all")) {
        setNewsCard(newsCardData);
      } else {
        const filtered = newsCardData.filter((item) =>
          tag.some((t) => item.tags.includes(t))
        );
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
  
    const goToPage = ( num : any) => {
      setPage(num);
    };
  
    return (
      <div>
        <PublicDashboardNavbar />
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
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, index:any) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 rounded ${
                page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }

export default CompanyNews;
