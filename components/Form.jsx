import React, { Component } from 'react';

import { createUser } from '../sources/users';
import '../css/style.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            age: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        createUser({ ...this.state }).then(res => console.log('res: ', res));
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    onChangeUser(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="form-container">
                    <label className="input-container">
                        <div className="input-container__name">Имя</div>
                        <input
                            type="text"
                            className="input-container__field"
                            onChange={e =>
                                this.onChangeUser('firstName', e.target.value)
                            }
                            value={this.state.firstName}
                        />
                    </label>
                    <label className="input-container">
                        <div className="input-container__name">Фамилия</div>
                        <input
                            type="text"
                            className="input-container__field"
                            onChange={e =>
                                this.onChangeUser('lastName', e.target.value)
                            }
                            value={this.state.lastName}
                        />
                    </label>
                    <label className="input-container">
                        <div className="input-container__name">Телефон</div>
                        <input
                            type="tel"
                            className="input-container__field"
                            onChange={e =>
                                this.onChangeUser('phone', e.target.value)
                            }
                            value={this.state.phone}
                        />
                    </label>
                    <label className="input-container">
                        <div className="input-container__name">Email</div>
                        <input
                            type="email"
                            className="input-container__field"
                            onChange={e =>
                                this.onChangeUser('email', e.target.value)
                            }
                            value={this.state.email}
                        />
                    </label>
                    <label className="input-container">
                        <div className="input-container__name ">Возраст</div>
                        <input
                            type="number"
                            className="input-container__field input-container__field_age"
                            onChange={e =>
                                this.onChangeUser('age', e.target.value)
                            }
                            value={this.state.age}
                        />
                    </label>
                    <button>Сохранить</button>
                </form>
            </div>
        );
    }
}

export default Form;
