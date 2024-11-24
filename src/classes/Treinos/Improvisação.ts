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
    arr?: exerciseProps[]
}

type matriculaTreinoProps = {
    matricula: number,
    tempo: number,
    treinos: treinoProps[]
}

export const matriculaTreino:matriculaTreinoProps[] = [{matricula: 20795, tempo: 20 , treinos: [{id: 1, name: "Treino (A)", desc: "Abdomen, Peito e Triceps",
    arr: [{id: 1 ,name:"Cruxifixo", volume: 4,  image: undefined}, {id: 2, name:"Triceps Francês", volume: 4,  image: undefined},
    {id: 4, name:"Abdominal", volume: 3,  image: undefined}]}, {id: 2, name: "Treino (B)", desc: "Costas, Biceps e Ombro",
    arr: [{id: 1 ,name:"Remada", volume: 4,  image: undefined}, {id: 2, name:"Rosca Scott", volume: 4,  image: undefined},
    {id: 4, name:"Elevação Lateral", volume: 3,  image: undefined}]}, {id: 3, name: "Treino (C)", desc: "Quadriceps, Posterior e Gluteo"}]},
    {matricula: 20755, tempo: 50, treinos: [{id: 1, name: "Treino (A)", desc: "Costas, Peito e Ombro",
    arr: [{id: 1 ,name:"Remada", volume: 4,  image: undefined}, {id: 2 ,name:"Supino Reto", volume: 4,  image: undefined},
    {id: 3, name:"Elevação Lateral", volume: 3,  image: undefined}]}, {id: 2, name: "Treino (B)", desc: "Biceps e Triceps",
    arr: [{id: 1 ,name:"Triceps Francês", volume: 4,  image: undefined}, {id: 2, name:"Rosca Scott", volume: 4,  image: undefined},
    {id: 4, name:"Elevação Lateral", volume: 3,  image: undefined}]}]}, {matricula: 20395, tempo: 90, treinos: [{id: 1, name: "Treino (A)", desc: "Quadriceps e Posterior",
    arr: [{id: 1 ,name:"Leg Press 45", volume: 4,  image: undefined}, {id: 2,name:"Cadeira Flexora", volume: 4, image: undefined}]}]}]

    export let tempo = "0"

    export function editTempo(val:string){
        tempo = val
    }