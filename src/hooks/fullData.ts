"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchFullData } from "@/lib/api";

export function useFullData() {
    return useQuery({
        queryKey: ["fullData"], // Chave única para cache
        queryFn: fetchFullData, // Função que criamos
        staleTime: 1000 * 60 * 5, // Dados ficam "fresh" por 5 minutos
    });
}
