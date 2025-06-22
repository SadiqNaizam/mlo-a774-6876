import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides the core layout structure for the application.
 * Based on the layout requirements, it creates a full-height, flex-centered
 * container to position its children in the middle of the screen.
 * This is ideal for pages like login, signup, or 404 pages.
 *
 * @param {React.ReactNode} children - The content to be rendered within the layout.
 * @param {string} [className] - Optional additional CSS classes to apply to the main element.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        // As per layout requirements: "flex flex-col items-center justify-center h-screen"
        'flex h-screen flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
