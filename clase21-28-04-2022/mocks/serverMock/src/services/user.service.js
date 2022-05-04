import createUser from "../utils/user.util.js";

export default class UserService {
  constructor() {
    this.users = [];
    this.lastId = 0;
  }
  async createUser(cant = 50) {
    this.users = [];
    for (let i = 0; i < Number(cant); i++) {
      const user = createUser();
      user.id = i + 1;
      this.users.push(user);
    }
    this.lastId = cant;
    return this.users;
  }
  async getUsers(id) {
    if (!id) {
      return this.users;
    } else {
      return this.users.filter((user) => user.id === Number(id));
    }
  }

  async addUser() {
    const user = createUser();
    user.id = this.lastId + 1;
    this.lastId++;
    this.users.push(user);
  }
  async updateUser(id, data) {
    if (this.users.length === 0) throw new Error("No hay data");
    let index = null;
    try {
      let usuario = this.users.filter((usuario, _index) => {
        if (usuario.id === Number(id)) {
          index = _index;
          return usuario;
        }
      })[0];
      Object.assign(usuario, data);
      this.users[index] = usuario;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteUser(id) {
    let index = null;
    try {
      this.users.filter((usuario, _index) => {
        if (usuario.id === Number(id)) {
          index = _index;
        }
      })[0];
      this.users.splice(index, 1);
    } catch (error) {
      console.log(error);
    }
  }
}
