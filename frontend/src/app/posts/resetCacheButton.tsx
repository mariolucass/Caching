"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { resetCache } from "../services/resetCache";

export const ResetCacheButton = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        resetCache();
        toast({
          title: "Cache Cleared!",
          description: "The cache has been successfully refreshed.",
        });
      }}
    >
      Reset Cache
    </Button>
  );
};
