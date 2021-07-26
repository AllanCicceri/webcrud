import React, { Component } from 'react'
import Content from '../template/Content'
import axios from 'axios'

const header = {
    icon: "fa fa-users",
    title: "Cadastro de Usuários",
    subtitle: "Utilize o formuláiro para cadastro de novos usuários. E a grid para consulta e edição"
}

const initialState = {
    user: { id: 0, name: '', email: '' },
    list: []
}

const baseUrl = 'https://protected-plateau-77058.herokuapp.com/users'

export default class Users extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)

        this.getList()
    }

    getList() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({user: initialState.user })
    }
    updateField(e) {
        const user = this.state.user
        user[e.target.name] = e.target.value
        this.setState({ user })
    }
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user).then(resp => {
            this.setState({user: ''})
        })
    }

    loadUser(user){
        this.setState({user})
    }
    removeUser(user){
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.state.list.filter(u => u.id !== user.id)
                this.setState({list})
            })
    }

    renderForm() {
        return (
            <form className="pt-2 pb-2 ps-3 pe-3 mb-4 border border-1 bg-light">
                <div className="row mb-2">
                    <div className="display-7">Register New User</div>
                </div>
                <div className="form-group">
                    <div className="row mb-2">
                        <input type="text" className="form-control" placeholder="user name here..."
                            name="name" value={this.state.user.name} onChange={e => this.updateField(e)} />
                        <br />
                        <input type="text" className="form-control" placeholder="user email here..."
                            name="email" value={this.state.user.email} onChange={e => this.updateField(e)} />
                    </div>

                    <button className="btn btn-dark" onClick={e => this.save(e)}>Save</button>
                    <button className="btn btn-secondary ms-2" onClick={e => this.clear(e)}>Clear</button>

                </div>
            </form>
        )
    }

    renderTable() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td className="fw-bold">{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.loadUser(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ms-1" onClick={() => this.removeUser(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Content {...header}>
                {this.renderForm()}
                {this.renderTable()}
            </Content>
        )
    }
}
