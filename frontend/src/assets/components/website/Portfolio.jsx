import React, { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active")?.classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        portfolioItems.forEach(item => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.classList.add("show");
          } else {
            item.classList.remove("show");
          }
        });
      });
    });

    // Clean up to avoid duplicate event listeners
    return () => {
      filterBtns.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
      });
    };
  }, []);

  const events = [
    {
      category: 'Exhibitions',
      img: 'assets/eventcategory/exhibition2.jpeg',
      title: 'Pak Water & Energy Expo',
      desc: 'Pak Water & Energy Expo (PWE) focuses exclusively on Water and Energy sectors, gathering top industry leaders.'
    },
    {
      category: 'Exhibitions',
      img: 'assets/eventcategory/exhibition3.jpeg',
      title: 'ICAP CFO Conference',
      desc: 'Annual conference by ICAP, managed by Prime Event Management, connecting finance leaders nationwide.'
    },
    {
      category: 'sports',
      img: 'assets/eventcategory/sports2.jpg',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'sports',
      img: 'assets/eventcategory/sports3.jpg',
      title: 'Sports Gala',
      desc: 'Join us for a grand gala of diverse sports activities and entertainment for all ages.'
    },
    {
      category: 'festival',
      img: 'assets/eventcategory/festival1.jpg',
      title: 'Music Festival',
      desc: 'Celebrate music with live performances, cultural shows, and lots of fun activities.'
    },
    {
      category: 'festival',
      img: 'assets/eventcategory/festival3.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
    {
      category: 'festival',
      img: 'assets/eventcategory/festival2.jpg',
      title: 'Family Festival',
      desc: 'Fun-filled day for families with games, food stalls, music, and special performances.'
    },
    {
      category: 'Corporate',
      img: 'assets/eventcategory/Corporate1.jpg',
      title: 'Corporate Seminar',
      desc: 'Exclusive corporate seminars focusing on growth strategies and leadership excellence.'
    },
    {
      category: 'Corporate',
      img: 'assets/eventcategory/Corporate2.jpg',
      title: 'Corporate Meet',
      desc: 'Network with industry leaders and explore new business opportunities and collaborations.'
    },
    {
      category: 'Corporate',
      img: 'assets/eventcategory/Corporate3.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'Exhibitions',
      img: 'assets/eventcategory/exhibition1.jpg',
      title: 'Pak Pharma & Healthcare Expo',
      desc: 'Integrated exhibition focusing on the Pharmaceutical and Healthcare Industries of Pakistan.'
    },
    {
      category: 'sports',
      img: 'assets/eventcategory/sports1.jpg',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    }
  ];

  return (
    <section className="brand-section-tab">
      <div className="container text-center">
        <div className="heading-style-1 mb-4">
          <h2>Our Portfolio</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-btns">
          <button className="btn filter-btn active" data-filter="all">All</button>
          <button className="btn filter-btn" data-filter="Exhibitions">Exhibitions</button>
          <button className="btn filter-btn" data-filter="sports">Sports</button>
          <button className="btn filter-btn" data-filter="festival">Festivals</button>
          <button className="btn filter-btn" data-filter="Corporate">Corporate Events</button>
        </div>

        {/* Image Gallery */}
        <div className="row gy-4 justify-content-center">
          {events.map((event, index) => (
            <div key={index} className={`col-md-6 col-lg-4 portfolio-item ${event.category} show`}>
              <div className="event-image position-relative">
                <img src={event.img} alt={event.title} />
                <div className="event-overlay">
                  <h4>{event.title}</h4>
                  <p>{event.desc}</p>
                  <button className="btn allbutton">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
