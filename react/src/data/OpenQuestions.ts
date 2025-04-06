export type OpenQuestion = {
    question: string;
    placeholder: string;
    maxLength?: number;
    required: boolean;
} 

export let arrayOpenQuestions: OpenQuestion[] = [
    {
        question: "¿Qué sugerencias tiene para mejorar nuestros servicios?",
        placeholder: "Comparta sus ideas con nosotros...",
        maxLength: 500,
        required: true
    },
    {
        question: "Describa brevemente su experiencia general con nuestros servicios",
        placeholder: "Cuéntenos sobre su experiencia...",
        maxLength: 500,
        required: true
    },
    {
        question: "¿Cómo podríamos superar sus expectativas en el futuro?",
        placeholder: "Nos interesa conocer su opinión...",
        maxLength: 300,
        required: false
    },
    {
        question: "Si tuvo algún problema con nuestro servicio, ¿podría describirlo?",
        placeholder: "Describa cualquier inconveniente que haya experimentado...",
        maxLength: 500,
        required: true
    },
    {
        question: "¿Hay algún comentario adicional que le gustaría compartir?",
        placeholder: "Cualquier comentario es bienvenido...",
        maxLength: 300,
        required: true
    }
]

export const getOpenQuestions = () => {
    return arrayOpenQuestions;
}
