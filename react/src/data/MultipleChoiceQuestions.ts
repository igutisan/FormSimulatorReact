export type MultipleChoice = {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4?: string;
    option5?: string;
    required: boolean;
} 

export let arrayQuestions: MultipleChoice[] = [
    {
        question: "¿Con qué frecuencia utiliza nuestros servicios?",
        option1: "Primera vez",
        option2: "Ocasionalmente",
        option3: "Regularmente",
        option4: "Frecuentemente",
        required: true
    },
    {
        question: "¿Qué tan satisfecho está con nuestro servicio de atención al cliente?",
        option1: "Muy insatisfecho",
        option2: "Insatisfecho", 
        option3: "Neutral",
        option4: "Satisfecho",
        option5: "Muy satisfecho",
        required: true
    },
    {
        question: "¿Qué aspecto de nuestro servicio considera más importante?",
        option1: "Precio",
        option2: "Calidad",
        option3: "Atención al cliente",
        option4: "Rapidez",
        required: true
    },
    {
        question: "¿Recomendaría nuestros servicios a otras personas?",
        option1: "Definitivamente no",
        option2: "Probablemente no",
        option3: "No estoy seguro",
        option4: "Probablemente sí",
        option5: "Definitivamente sí",
        required: true
    },
    {
        question: "¿Cómo conoció nuestros servicios?",
        option1: "Recomendación",
        option2: "Redes sociales",
        option3: "Publicidad",
        option4: "Búsqueda en internet",
        required: true
    }
]

export const getQuestions = () => {
    return arrayQuestions;
}


