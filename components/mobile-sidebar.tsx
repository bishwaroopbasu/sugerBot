'use client'

import React from 'react'
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './sidebar';

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>

      <div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </div>
      </SheetTrigger>
      <SheetContent side={'right'} className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSideBar