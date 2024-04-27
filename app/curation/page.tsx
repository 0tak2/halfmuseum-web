'use client'

import { useState } from "react";
import "98.css";
import CurationItem from "@/components/curation/list/curation-item";

export default function Home() {
  const items = [
    {
      id: 1,
      title: 'Ancient Egyptian Artifacts',
      description: 'Explore the rich history of ancient Egypt through a collection of artifacts including pottery, sculptures, and hieroglyphics.',
    },
    {
      id: 2,
      title: 'Space Exploration: Past, Present, Future',
      description: 'Journey through the cosmos and learn about humanity\'s exploration of space, from early telescopes to modern spacecraft and future missions to Mars and beyond.',
    },
    {
      id: 3,
      title: 'Renaissance Masterpieces',
      description: 'Immerse yourself in the beauty and innovation of Renaissance art, featuring works by Leonardo da Vinci, Michelangelo, and Raphael.',
    },
    {
      id: 4,
      title: 'The Evolution of Computing',
      description: 'Trace the development of computers from early mechanical calculators to modern supercomputers and artificial intelligence.',
    },
    {
      id: 5,
      title: 'Endangered Species Conservation',
      description: 'Learn about efforts to protect endangered species around the world and the importance of biodiversity conservation for the planet.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: '100%', minHeight: '80%' }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Curations</div>
        </div>

        <div className="window-body">
          {items.map(item => (
            <CurationItem
              key={item.id}
              title={item.title}
              description={item.description}
              imgSrc="/moonjar.jpg"
              imgAlt="a moonjar"
            ></CurationItem>
          ))}
        </div>
      </div>
    </main >
  );
}
