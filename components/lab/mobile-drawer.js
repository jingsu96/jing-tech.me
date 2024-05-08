import { CommandIcon } from 'lucide-react';

import { MenuContent } from '@/components/lab/menu-content';
import { Button } from '@/components/lab/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/lab/ui/drawer';

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" title="Toggle drawer">
          <CommandIcon size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="shadow-jt1 h-4/5 border-none bg-bg-alt">
        <div className="overflow-y-auto p-4">
          <MenuContent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
