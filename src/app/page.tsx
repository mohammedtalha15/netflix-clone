'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieRow from '@/components/MovieRow';
import MovieModal from '@/components/MovieModal';
import Footer from '@/components/Footer';
import { categories, Movie } from '@/data/movies';

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMovie(null), 300);
  };

  return (
    <main>
      <Navbar />
      <Billboard />

      {/* Movie Rows */}
      <div style={{ marginTop: '-120px', position: 'relative', zIndex: 20 }}>
        {categories.map((category) => (
          <MovieRow
            key={category.id}
            title={category.title}
            movies={category.movies}
            isTop10={category.isTop10}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      <Footer />

      {/* Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
