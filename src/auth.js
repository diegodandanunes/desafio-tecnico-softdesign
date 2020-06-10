// em um cenário real eu faria a autenticação com um back-end + JWT
// mas para fins de teste mantive o mais simples possível
class Auth {
    constructor(props) {
        this.authenticated = false;
    }

    login(data) {
        localStorage.getItem(data.usuario) === data.password ? this.authenticated = true : this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();