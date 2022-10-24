import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaLinks from "../components/partials/Services";
import AuthAPI from "../services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";
import NavBar from "../components/partials/NavBar";

const schema = yup
  .object({
    username: yup.string().email().required("l'adresse email est obligatoire"),
    password: yup.string().required("Le mot de passe est obligatoire"),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setIsAuthenticated } = useContext(AuthContext);

  const [er, setEr] = useState("");

  let navigate = useNavigate();

  //Gest du submit
  const onSubmit = async (credentials) => {
    try {
      await AuthAPI.authenticate(credentials);
      setIsAuthenticated(true);
      toast.success("Vous êtes desormais connecté");
      navigate("/", { replace: true });
    } catch (error) {
      const code = error.response.data.code;
      if (code === 401) {
        setEr("Identifiants invalides");
    } else {
          setEr("Une erreur interne est survenue");
      }
      toast.error(
        "Une erreur est survenue lors de la connexion. Vérifier que vos identifiants sont correctes et réessayez"
      );
    }
  };

  return (
    <>
    <NavBar title="Connexion Kbusso" subtitle="Connexion" />
      <div className="login-section padding-tb">
        <div className=" container">
          <div className="account-wrapper">
            <h3 className="title">Connexion</h3>
            <p className="text-danger text-center">{er}</p>
            <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  {...register("username")}
                  placeholder="Entrez votre adresse e-mail"
                />
                <p className="text-danger float-start">
                  {errors.username && errors.username.message}
                </p>
              </div>
              <div className="form-group">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Entrez votre mot de passe"
                />
                <p className="text-danger float-start">
                  {errors.password && errors.password.message}
                </p>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label for="remember">Se souvenir de moi</label>
                  </div>
                  <Link to="#">Mot de passe oublié?</Link>
                </div>
              </div>
              <div className="form-group">
                <button
                  disabled={isSubmitting}
                  className="d-block lab-btn"
                  type="submit"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span className="ms-sm-1">Se connecter maintenant</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Vous avez déjà un compte?
                <Link to="/registration"> S'inscrire</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">
                Se connecter avec les réseaux sociaux
              </h5>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
