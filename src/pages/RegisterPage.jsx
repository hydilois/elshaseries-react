import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/forms/Button';
import Field from '../components/forms/Field';
import NavBar from '../components/partials/NavBar';
import UserAPI from '../services/userAPI';


const RegisterPage = ({ history }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        pseudo: "",
        password: "",
        passwordConfirm: "",
        phoneNumber: "+237"
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        pseudo: "",
        password: "",
        passwordConfirm: "",
        phoneNumber: ""
    })

    // Chargement des inputs dans le formulaire
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value })
    }

    // Gestion de la soumission du formulaire
    const handleSubmit = async event => {
        event.preventDefault();
        const apiErrors = {}
        if (user.password !== user.passwordConfirm) {
            apiErrors.passwordConfirm = "Les deux mots de passe ne sont pas identiques";
            setErrors(apiErrors);
            toast.error("Des erreurs dans votre formulaire");
            return;
        }

        try {
            await UserAPI.register(user);
            setErrors({})
            // TODO : success flash message
            toast.success("Vous êtes désormais inscrit, un mail de confirmation à été envoyé à l'adresse indiquée lors de votre inscription")
            history.replace('/login')
        } catch (error) {
            const { violations } = error.response.data;
            if (violations) {
                const apiErrors = {};
                violations.forEach(violation => {
                    apiErrors[violation.propertyPath] = violation.message;
                });
                // TODO Message d'erreur
                toast.error("Des erreurs dans le formulaires");
                setErrors(apiErrors);
            }

        }

    }


    return (<>
    <NavBar title="Inscription Kbusso" subtitle="Inscription"/>
        <div className="login-section padding-tb">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">S'inscrire maintenant</h3>
                    <form className="account-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <Field
                                    name="name"
                                    placeholder="Nom complet"
                                    value={user.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    required="required"
                                />
                            </div>
                            <div className="col-md-6">
                                <Field
                                    name="email"
                                    placeholder="Adresse email"
                                    value={user.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    type="email"
                                    required="required"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Field
                                    name="pseudo"
                                    placeholder="Nom d'utilisateur"
                                    value={user.pseudo}
                                    onChange={handleChange}
                                    error={errors.pseudo}
                                    required="required"
                                />
                            </div>
                            <div className="col-md-6">
                                <Field
                                    name="phoneNumber"
                                    placeholder="Numéro de téléphone"
                                    value={user.phoneNumber}
                                    onChange={handleChange}
                                    error={errors.phoneNumber}
                                    required="required"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Field
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={user.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                    type="password"
                                    required="required"
                                />
                            </div>
                            <div className="col-md-6">
                                <Field
                                    name="passwordConfirm"
                                    placeholder="Confirmation du mot de passe"
                                    value={user.passwordConfirm}
                                    onChange={handleChange}
                                    error={errors.passwordConfirm}
                                    type="password"
                                    required="required"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <Button name="M'inscrire" classes='d-block lab-btn' />
                        </div>
                    </form>
                    <div className="account-bottom">
                        <span className="d-block cate pt-10">Etes-vous membre? <Link to="/login">Se connecter</Link></span>
                        <span className="or"><span>ou</span></span>
                        <h5 className="subtitle">S'inscrire avec les réseaux sociaux</h5>
                        <ul className="social-media social-color justify-content-center d-flex lab-ul">
                            <li>
                                <Link to="#" className="facebook"><i className="icofont-facebook"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="twitter"><i className="icofont-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="linkedin"><i className="icofont-linkedin"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="instagram"><i className="icofont-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="pinterest"><i className="icofont-pinterest"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div></>);
}

export default RegisterPage;