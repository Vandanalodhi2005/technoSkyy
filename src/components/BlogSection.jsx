import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      category: "TECHNOLOGY AND ETHICS",
      title:
        "Revolutionizing the Future: How Tech Companies are Changing the Way We Live",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
      date: "July 9, 2025",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      category: "BUSINESS AND ENTREPRENEURSHIP",
      title:
        "Disrupting Industries: The Success Stories of Tech Company Giants",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec.",
      date: "July 9, 2025",
      image:
        "https://images.unsplash.com/photo-1581091870627-3e06f6c4e6f9",
    },
    {
      category: "BUSINESS AND ENTREPRENEURSHIP",
      title:
        "Navigating the Challenges of the Tech Industry: Insights from Top Executives",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec.",
      date: "July 9, 2025",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
     {
      category: "TECHNOLOGY AND ETHICS",
      title:
        "Revolutionizing the Future: How Tech Companies are Changing the Way We Live",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
      date: "July 9, 2025",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      category: "BUSINESS AND ENTREPRENEURSHIP",
      title:
        "Disrupting Industries: The Success Stories of Tech Company Giants",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec.",
      date: "July 9, 2025",
      image:
        "https://images.unsplash.com/photo-1581091870627-3e06f6c4e6f9",
    },
    {
      category: "BUSINESS AND ENTREPRENEURSHIP",
      title:
        "Navigating the Challenges of the Tech Industry: Insights from Top Executives",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec.",
      date: "July 9, 2025",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
  ];

  return (
    <>
      <section className="blog-section">
        <div className="blog-container">
          {blogs.map((item, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={item.image} alt={item.title} />
                <span className="blog-badge">{item.category}</span>
              </div>

              <div className="blog-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="blog-footer">{item.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CSS SAME FILE ===== */}
      <style>{`
        .blog-section {
          background: linear-gradient(135deg, #05070d, #0b1224);
          padding: 80px 0;
        }

        .blog-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .blog-card {
          background: #132238;
          border-radius: 18px;
          overflow: hidden;
          transition: 0.4s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .blog-card:hover {
          transform: translateY(-10px);
        }

        .blog-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .blog-card:hover img {
          transform: scale(1.1);
        }

        .blog-badge {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #1d9cff;
          color: #fff;
          padding: 6px 16px;
          font-size: 12px;
          border-radius: 20px;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .blog-content {
          padding: 25px;
        }

        .blog-content h3 {
          color: #fff;
          font-size: 20px;
          line-height: 1.4;
          margin-bottom: 15px;
        }

        .blog-content p {
          color: #b7c5dd;
          font-size: 15px;
          line-height: 1.7;
        }

        .blog-footer {
          padding: 15px 25px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #2d9cff;
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .blog-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .blog-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default BlogSection;
