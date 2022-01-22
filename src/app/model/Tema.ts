import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    public postagem: Postagem[] //[] referencia o array de postagem em tema= várias postagens para um tema ManyToOne.
}