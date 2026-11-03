import { Separator } from "../ui/separator";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import React from "react";

const ScrollAreaUI = () => {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );

  return (
    <ScrollArea className="w-full h-70 overflow-y-auto rounded-md border bg-white">
      <div className="p-4">
        {tags.map((tag) => (
          <React.Fragment key={tag} >
            <div className="text-sm p-3">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>

      <ScrollBar/>

    </ScrollArea>
  )
};

export default ScrollAreaUI;
