type exerciseProps = {
    id:number,
    name:string,
    volume:number,
    image?:string
}
type treinoProps = {
    id:number,
    name:string,
    desc:string,
    arr: exerciseProps[]
}

type foodProps = {
    id:number,
    name:string,
    grams:string,
}
type dietProps = {
    id:number,
    name:string,
    arr: foodProps[]
}

export let exercicios:exerciseProps[] = [
    {id: 1, name: "Supino Reto", volume: 4, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/4EANOS6Y6A3SW9JvIwXMxlab?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212523Z&X-Amz-Expires=216000&X-Amz-Signature=4449751163fc73a4f6dad6454dffd9df204158549e21bc559819105005f0b967&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 2, name: "Triceps Francês", volume: 3, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/idEBhy0Qqz0MzIf1ZWyODXJZ?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212459Z&X-Amz-Expires=216000&X-Amz-Signature=70857c674c329011a7e00b1972644c5e17d57cc990bef1639388133836e46b0e&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 3, name: "Remada", volume: 4, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/JlsIx7DpjTWe151BBodeqOwI?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212430Z&X-Amz-Expires=216000&X-Amz-Signature=ef7770e9ce6fddd13553e1f98af2c0437056f07e8da691c376963ef862921830&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 4, name: "Abdominal", volume: 3, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/CbTBWoWHh1GlIdey02UWQWZ3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212343Z&X-Amz-Expires=216000&X-Amz-Signature=304d0cfd440137c2b93b764b62e79b2b1e274df962cbd9f17f08c5d70eb2fc57&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 5, name: "Rosca Scott", volume: 3, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/Ig5Rm7EgzFYBgVF4vzgONukR?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212315Z&X-Amz-Expires=216000&X-Amz-Signature=3e222a01d67af64aa6a59e8c60e01b09f76947e1fb3ea1e8f53322aa13a622d9&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 6, name: "Elevação Lateral", volume: 3, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/FxY2CdcAVtRi4FmghOCrCWz1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212230Z&X-Amz-Expires=216000&X-Amz-Signature=c514c252a75ba45140702eba6a40572ccaf4d01647a3bb8bcfb1c3995f649cad&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 7, name: "Cadeira Flexora", volume: 4, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/XU6GPnx4pGddgA7kKrxI4cC9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212151Z&X-Amz-Expires=216000&X-Amz-Signature=1b3c84302567f5bc7714508dcf2abfcd1d0a8a0f1db107ad9b404841507adbc1&X-Amz-SignedHeaders=host&x-id=GetObject"},
    {id: 8, name: "Leg Press 45", volume: 4, image: "https://belifter-uploader.s3.sa-east-1.amazonaws.com/7JNTfL9R4gcieEf9c31lIoxE?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T212101Z&X-Amz-Expires=216000&X-Amz-Signature=3e80af38dc0ac778f33c55b0305c017328ca0d876cc16c40093126152e77b14e&X-Amz-SignedHeaders=host&x-id=GetObject"}
]

type matriculaTreinoProps = {
    matricula: number,
    tempo: number,
    treinos: treinoProps[]
}

type matriculaDietaProps = {
    matricula: number,
    dietas: dietProps[]
}

export const matriculaTreino:matriculaTreinoProps[] = [
    {matricula: 20795, tempo: 20 , treinos: [
        {id: 1, name: "Treino (A)", desc: "Abdomen, Peito e Triceps", arr:[
            {id: 1 ,name:"Supino Reto", volume: 4,  image: exercicios[0].image}, 
            {id: 2, name:"Triceps Francês", volume: 4,  image: exercicios[1].image},
            {id: 3, name:"Abdominal", volume: 3,  image: exercicios[3].image}]}, 
        {id: 2, name: "Treino (B)", desc: "Costas, Biceps e Ombro", arr: [
            {id: 1 ,name:"Remada", volume: 4,  image: exercicios[2].image}, 
            {id: 2, name:"Rosca Scott", volume: 4,  image: exercicios[4].image},
            {id: 3, name:"Elevação Lateral", volume: 3,  image: exercicios[5].image}]}, 
        {id: 3, name: "Treino (C)", desc: "Quadriceps, Posterior e Gluteo", arr: []}
    ]},
    {matricula: 20755, tempo: 50, treinos: [
        {id: 1, name: "Treino (A)", desc: "Costas, Peito e Ombro", arr: [
            {id: 1 ,name:"Remada", volume: 4,  image: exercicios[2].image}, 
            {id: 2 ,name:"Supino Reto", volume: 4,  image: exercicios[0].image},
            {id: 3, name:"Elevação Lateral", volume: 3,  image: exercicios[5].image}]}, 
        {id: 2, name: "Treino (B)", desc: "Biceps e Triceps", arr: [
            {id: 1 ,name:"Triceps Francês", volume: 4,  image: exercicios[1].image}, 
            {id: 2, name:"Rosca Scott", volume: 4,  image: exercicios[4].image},
            {id: 3, name:"Elevação Lateral", volume: 3,  image: exercicios[5].image}]}
        ]}, 
    {matricula: 20395, tempo: 90, treinos: [
        {id: 1, name: "Treino (A)", desc: "Quadriceps e Posterior", arr: [
            {id: 1 ,name:"Leg Press 45", volume: 4,  image: exercicios[7].image}, 
            {id: 2,name:"Cadeira Flexora", volume: 4, image: exercicios[6].image}]}
    ]}]


    export function setExercicios(arr:exerciseProps[]){
        exercicios = arr
    }

    export function setComidas(arr:foodProps[]){
        comidas = arr
    }

    export let tempo = "0"

    export function editTempo(val:string){
        tempo = val
    }

    export let reps = ""

    export function editReps(val:string){
        reps = val
    }

    export let comidas:foodProps[] = [
        {id: 1, name:"Pão com Ovo", grams: "150g"}, 
        {id: 2 , name:"Yourgute", grams: "75g"}, 
        {id: 3 , name:"Cereal Integral", grams: "75g"},
        {id: 4, name:"Arroz integral", grams: "150g"}, 
        {id: 5 , name:"Carne Vermelha", grams: "100g"}, 
        {id: 6 , name:"Salda de Alface", grams: "100g"},
        {id: 7, name:"Macarrão ao molho sugo", grams: "200g"}, 
        {id: 8 , name:"Frango Cozido", grams: "100g"}, 
        {id: 9 , name:"Salada de vegetais", grams: "100g"},
        {id: 10, name:"Arroz Branco", grams: "150g"}, 
        {id: 11, name:"Filé de Patinho", grams: "100g"}, 
        {id: 12, name:"Pudim", grams: "75g"}
    ]

    export const matriculaDieta:matriculaDietaProps[] = [
        {matricula: 20795, dietas: [
            {id: 1, name: "Café da Manhã", arr:[
                {id: 1, name:"Pão com Ovo", grams: "150g"}, 
                {id: 2 , name:"Yourgute", grams: "75g"}, 
                {id: 3 , name:"Cereal Integral", grams: "75g"}]}, 
            {id: 2, name: "Almoço", arr: [
                {id: 1, name:"Arroz integral", grams: "150g"}, 
                {id: 2 , name:"Carne Vermelha", grams: "100g"}, 
                {id: 3 , name:"Salda de Alface", grams: "100g"}]},  
            {id: 3, name: "Janta", arr: []}
        ]},
        {matricula: 20795, dietas: [
            {id: 1, name: "Café da Manhã", arr:[]},  
            {id: 2, name: "Almoço", arr: [
                {id: 1, name:"Macarrão ao molho sugo", grams: "200g"}, 
                {id: 2 , name:"Frango Cozido", grams: "100g"}, 
                {id: 3 , name:"Salada de vegetais", grams: "100g"}]},   
            {id: 3, name: "Janta", arr: [
                {id: 1, name:"Arroz Branco", grams: "150g"}, 
                {id: 2 , name:"Filé de Patinho", grams: "100g"}, 
                {id: 3 , name:"Pudim", grams: "75g"}]}
        ]}, 
        {matricula: 20795, dietas: [
            {id: 1, name: "Café da Manhã", arr:[]}
        ]}]