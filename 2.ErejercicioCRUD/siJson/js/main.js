import { CRUD } from "./crud.js";

function app() {
    let crud = new CRUD("ejemplo");
    crud.create([1, 2, 3]);
    crud.create({ message: "Hola mundo" });

    let crud2 = new CRUD("ejemplo2");
    console.log(crud2.readAll());
}
app();