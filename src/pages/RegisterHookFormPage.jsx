import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Banner from "../components/partials/NavBar";
import UserAPI from "../services/UserAPI";
import { toast } from "react-toastify";
import SocialMediaLinks from "../components/partials/SocialMediaLinks";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Votre nom est obligatoire")
      .min(2, "Le nom doit avoir au moins 3 caractères"),
    email: yup.string().email().required("l'adresse email est obligatoire"),
    pseudo: yup
      .string()
      .required("Le pseudo est obligatoire")
      .min(3, "Le pseudo doit avoir au moins 3 caractères"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(6, "Le mot de passe doit faire au moins 6 caractères")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Le mot de passe doit avoir au moins 6 caractères, Une majuscule, Une minuscule, Un nombre et un caractère spécial"
      ),
    confirmPassword: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(6, "Le mot de passe doit faire au moins 6 caractères")
      .oneOf(
        [yup.ref("password"), null],
        "Les deux mots de passe doivent être identiques"
      ),
    phoneNumber: yup
      .string()
      .required("Le numéro de téléphone est obligatoire")
      .min(13, "Le numéro de téléphone doit faire au moins 13 caractères"),
  })
  .required();

const RegisterHookFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();
  const onSubmit = async (user) => {
    try {
      await UserAPI.register(user);
      // TODO : success flash message
      toast.success(
        "Vous êtes désormais inscrit, un mail de confirmation à été envoyé à l'adresse indiquée lors de votre inscription"
      );
      navigate("/login", { replace: true });
    } catch (error) {
      const { violations } = error.response.data;

      if (violations) {
        violations.forEach((violation) => {
          setError(violation.propertyPath, {
            type: "server",
            message: violation.message,
          });
        });
        // TODO Message d'erreur
        toast.error("Des erreurs dans le formulaires");
      } else {
        toast.error(
          "Une erreur est survenue lors de la soummission de votre formulaire. Si le problème persiste, Bien vouloir nous contacter"
        );
      }
    }
  };

  return (
    <>
      <Banner title="Inscription Kbusso" subtitle="Inscription" />
      <div className="login-section padding-tb">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">S'inscrire maintenant</h3>
            <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input {...register("name")} placeholder="Nom et Prénom" />
                    <p className="text-danger float-start">
                      {errors.name && errors.name.message}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("email")}
                      placeholder="Adresse email"
                      defaultValue="elsha@gmail.com"
                    />
                    <p className="text-danger float-start">
                      {errors.email && errors.email.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("pseudo")}
                      placeholder="Pseudo ou Nom d'utilisateur"
                      defaultValue="elshaseries"
                    />
                    <p className="text-danger float-start">
                      {errors.pseudo && errors.pseudo.message}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("phoneNumber")}
                      placeholder="Numéro de téléphone"
                      defaultValue="+237695325487"
                    />
                    <p className="text-danger float-start">
                      {errors.phoneNumber && errors.phoneNumber.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("password")}
                      placeholder="Mot de passe"
                      type="password"
                      defaultValue="Elsha123@"
                    />
                    <p className="text-danger float-start">
                      {errors.password && errors.password.message}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("confirmPassword")}
                      placeholder="Confimer le mot de passe"
                      type="password"
                      defaultValue="Elsha123@"
                    />
                    <p className="text-danger float-start">
                      {errors.confirmPassword && errors.confirmPassword.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  class="d-block lab-btn"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span className="ms-sm-1">M'inscrire</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Etes-vous membre? <Link to="/login">Se connecter</Link>
              </span>
              <span className="or">
                <span>ou</span>
              </span>
              <h5 className="subtitle">S'inscrire avec les réseaux sociaux</h5>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterHookFormPage;
