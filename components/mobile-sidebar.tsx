'use client'

import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './sidebar';

const MobileSideBar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
        </SheetTrigger>
        <SheetContent className='p-0'>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileSideBar