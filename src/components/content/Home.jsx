import React from 'react'
import Content from '../template/Content'

const header = {
    icon: "fa fa-home",
    title: "Welcome!",
    subtitle: "Nothing was done today, congratulations"
}

export default props =>
    <Content {...header}>
        <div className="display-5">
            Sistema de Cadastro de Usuários
        </div>
        <p>Navegue entre os menus e divirta-se</p>
    </Content>