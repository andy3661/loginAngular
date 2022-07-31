import { UsuarioModel } from "./usuario.model";

export class ClienteModel{
id?: String;
    documento!: String;
    nombre!: String;
    apellido!: String;
    telefono!: String;
    correo!: String;
    direccion!: String;
    ciudad!: String;
    usuario!: UsuarioModel;
}