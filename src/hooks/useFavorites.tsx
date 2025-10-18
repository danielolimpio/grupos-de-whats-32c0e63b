import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function useFavorites(userId: string | undefined) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (userId) {
      fetchFavorites();
    }
  }, [userId]);

  const fetchFavorites = async () => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from("favorites")
        .select("group_id")
        .eq("user_id", userId);

      if (error) throw error;

      const favoriteIds = new Set(data.map((fav) => fav.group_id));
      setFavorites(favoriteIds);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = async (groupId: string) => {
    if (!userId) {
      toast({
        title: "Faça login",
        description: "Você precisa estar logado para favoritar grupos.",
        variant: "destructive",
      });
      return;
    }

    const isFavorited = favorites.has(groupId);

    try {
      if (isFavorited) {
        // Remove from favorites
        const { error } = await supabase
          .from("favorites")
          .delete()
          .eq("user_id", userId)
          .eq("group_id", groupId);

        if (error) throw error;

        setFavorites((prev) => {
          const newSet = new Set(prev);
          newSet.delete(groupId);
          return newSet;
        });

        toast({
          title: "Removido dos favoritos",
          description: "Grupo removido da sua lista de favoritos.",
        });
      } else {
        // Add to favorites
        const { error } = await supabase
          .from("favorites")
          .insert({ user_id: userId, group_id: groupId });

        if (error) throw error;

        setFavorites((prev) => new Set([...prev, groupId]));

        toast({
          title: "Adicionado aos favoritos",
          description: "Grupo adicionado à sua lista de favoritos.",
        });
      }
    } catch (error: any) {
      console.error("Error toggling favorite:", error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar os favoritos.",
        variant: "destructive",
      });
    }
  };

  return {
    favorites,
    isLoading,
    toggleFavorite,
    isFavorited: (groupId: string) => favorites.has(groupId),
  };
}
