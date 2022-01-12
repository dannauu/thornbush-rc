import { Container } from "react-bootstrap";
import React from "react";
import FAQ from "react-faq-component";
import "./Faq.css"
import Socials from '../Socials/Socials'

const Faq = () => {
  const data = {
    rows: [
      {
        title: "Where is Thornbush RC park located?",
        content: "Located at 604 SW 5th St, Oak Grove, MO 64075.",
      },
      {
        title: "How much does it cost to come drift and or crawl for the day?",
        content:
          "It is free to come drift and crawl, although you are required to bring your own equipment!",
      },
      {
        title: "How do I attend an event?",
        content:
          "Grab your gear and head out! We announce our event days on our facebook page and also on here under the events tab!",
      },
      {
        title: "What do I get for winning an event?",
        content:
          "Sometimes there are cash prizes and most of the time it's braggin rights!",
      },
      {
        title: "Do I need a specific RC truck for the crawler course?",
        content:
          "It is deisgned for 1.9 scale but you can run anything you would like on it!",
      },
      {
        title: "What are the hours for Thornbush park?",
        content:
          "Monday-Friday 4:00pm-8:00pm | Saturday 12pm-9pm | CLOSED Sunday",
      },
      {
        title:
          "I have an idea for one of the courses, how can I suggest my idea to the owner?",
        content:
          "Navigate to the contact section at the top of the website and fill out the required form!",
      },
      {
        title:
          "Can I donate money to better the course and or buy equipment for the course?",
        content:
          "Yes! Although never required, we do accept donations for the course and equipment!",
      },
      {
        title: "",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "How do I disband my team?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "Why is it taking so long to find a match?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
    ],
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  const styles = {
    titleTextColor: "white",
    rowTitleTextSize: "35px",
    rowContentTextSize: "25px",
    rowTitleColor: "white",
    bgColor: "black",
    rowContentColor: "lime",
    arrowColor: "lime",
  };

  return (
    <main className="faqMain">
      <h1 className="display-1 faqHeader">Frequently Asked Questions</h1>

      <Container className="faqTable">
        <FAQ data={data} config={config} styles={styles} />
      </Container>

      <Socials className='socials'/>
    </main>
  );
};

export default Faq;
