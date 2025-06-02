
import { useState } from "react";

export function useFormattedNumber(initialValue: number) {
    const [isHovered, setIsHovered] = useState(false);

    const formatNumber = (val: number, full: boolean = false) => {
        if (full) {
            return new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2,
            }).format(val);
        }

        const trillion = 1e12;
        const billion = 1e9;
        const million = 1e6;

        if (val >= trillion) {
            return `R$ ${(val / trillion).toFixed(1)} tri`;
        }
        if (val >= billion) {
            return `R$ ${(val / billion).toFixed(1)} bi`;
        }
        if (val >= million) {
            return `R$ ${(val / million).toFixed(1)} mi`;
        }

        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
        }).format(val);
    };

    return {
        displayValue: formatNumber(initialValue, isHovered),
        fullValue: formatNumber(initialValue, true),
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    };
}
