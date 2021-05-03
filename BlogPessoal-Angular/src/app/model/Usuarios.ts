import { postagem } from "./Postagem"

export class Usuario {
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public Tipo: string
    public postagem:postagem[]
}
