'use client';

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '../components/ui/navbar-menu';
import { cn } from '@/utils/cn';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Function to handle scrolling to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto md:w-[40rem] z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Course"
        >
          <div className="text-sm grid md:grid-cols-2 gap-10 p-4 flex-col">
            <ProductItem
              title="Piano Essentials"
              href="https://algochurn.com"
              src="https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGlhbm98ZW58MHx8MHx8fDA%3D"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Vocal Training Basics"
              href="https://tailwindmasterkit.com"
              src="https://plus.unsplash.com/premium_photo-1681263751033-259d63fa0215?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Vm9jYWx8ZW58MHx8MHx8fDA%3D"
              description="Production ready Tailwind CSS components for your next project."
            />
            <ProductItem
              title="Drumming Techniques"
              href="https://gomoonbeam.com"
              src="https://plus.unsplash.com/premium_photo-1702220261651-05249c445dda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHJ1bW1pbmd8ZW58MHx8MHx8fDA%3D"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Electronic Music Production"
              href="https://userogue.com"
              src="https://images.unsplash.com/photo-1653569395995-39daf1602fb2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVsZWN0cm9uaWMlMjBNdXNpYyUyMFByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D"
              description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI."
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Me"
        />
      </Menu>
    </div>
  );
}

export default Navbar;
