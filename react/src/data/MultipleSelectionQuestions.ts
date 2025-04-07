export type MultipleSelection = {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4?: string;
    option5?: string;
    option6?: string;
    minSelections?: number;
    required: boolean;
} 

export let arrayMultipleSelections: MultipleSelection[] = [
    {
        question: "¿Cuáles de estos servicios ha utilizado en los últimos 3 meses?",
        option1: "Consulta online",
        option2: "Soporte técnico",
        option3: "Compras en línea",
        option4: "Reclamos",
        option5: "Gestión de cuentas",
        minSelections: 1,
        required: true
    },
    {
        question: "¿Qué aspectos de nuestra aplicación móvil le parecen más útiles?",
        option1: "Facilidad de uso",
        option2: "Diseño visual",
        option3: "Velocidad",
        option4: "Funcionalidades",
        option5: "Notificaciones",
        minSelections: 1,
        required: true
    },
    {
        question: "¿Qué métodos de pago ha utilizado en nuestra plataforma?",
        option1: "Tarjeta de crédito/débito",
        option2: "Transferencia bancaria",
        option3: "PayPal",
        option4: "Pago móvil",
        option5: "Criptomonedas",
        minSelections: 1,
        required: true
    },
    {
        question: "¿Qué factores influyeron en su decisión de usar nuestros servicios?",
        option1: "Precio",
        option2: "Recomendaciones",
        option3: "Reputación de la marca",
        option4: "Experiencias previas",
        option5: "Publicidad",
        option6: "Comparación con competidores",
        minSelections: 1,
        required: true
    },
    {
        question: "¿Qué funciones adicionales le gustaría ver en nuestros servicios?",
        option1: "Programa de lealtad",
        option2: "Más opciones de personalización",
        option3: "Mejor integración con otras plataformas",
        option4: "Más opciones de pago",
        option5: "Chat en vivo 24/7",
        minSelections: 0,
        required: true
    }
]

export const getMultipleSelections = () => {
    return arrayMultipleSelections;
}