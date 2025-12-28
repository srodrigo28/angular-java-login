/**
 * Formata um número para o padrão de moeda brasileiro (BRL).
 * @param value O número a ser formatado.
 * @returns A string formatada como moeda. Ex: "R$ 1.234,56"
 */

export function formatCurrency(value: number) {
    if (isNaN(value) || value === null || value === undefined) {
        return "valor inválido";
    }
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}
