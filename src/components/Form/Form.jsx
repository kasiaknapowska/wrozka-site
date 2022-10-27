import * as React from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"

import CalendarIcon from "../../svg/icon-calendar.svg"

// import { } from "./form.module.css"

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { privacy: false, data: false } })

  const onSubmit = data => console.log(data)

  return (
    <>
      {type === "contact" ? (
        <h2 style={{ marginBottom: "var(--size-gap)" }}>Wypełnij formularz</h2>
      ) : undefined}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={type === "contact" ? "contactPageForm" : ""}
      >
        <label>
          Imię i nazwisko dziecka * &nbsp;&nbsp;
          {errors.name && (
            <span className="errorMessage">{errors.name?.message}</span>
          )}
          {errors.name && console.log(errors.name)}
          <input
            placeholder="Imię i nazwisko dziecka"
            {...register("name", {
              required: {
                value: true,
                message: "Uzupełnij pole",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
        </label>
        {type === "contact" ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <label style={{ width: "100%" }}>
              Data urodzenia (opcjonalnie)
              <input type="date" min="2004-11-01" {...register("birth")} />
            </label>
            <CalendarIcon
              style={{
                maxWidth: "2.5rem",
                position: "absolute",
                bottom: ".7rem",
                right: "0.5rem",
                zIndex: "-1",
                width: "2rem",
              }}
            />
          </div>
        ) : undefined}
        <label>
          Telefon * &nbsp;&nbsp;
          {errors.phone && (
            <span className="errorMessage">{errors.phone?.message}</span>
          )}
          <input
            placeholder="Telefon"
            {...register("phone", {
              required: {
                value: true,
                message: "Uzupełnij pole",
              },
              minLength: {
                value: 9,
                message: "Podaj prawidłowy numer telefonu",
              },
            })}
            aria-invalid={errors.phone ? "true" : "false"}
          />
        </label>
        <label>
          E-mail * &nbsp;&nbsp;
          {errors.email && (
            <span className="errorMessage">{errors.email?.message}</span>
          )}
          <input
            placeholder="E-mail"
            {...register("email", {
              required: {
                value: true,
                message: "Uzupełnij pole",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Podaj prawidłowy adres e-mail",
              },
            })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
        </label>

        {type === "contact" ? (
          <fieldset>
            <legend>Rodzaj wizyty (opcjonalnie)</legend>
            <label className="radio">
              <input type="radio" {...register("visit")} value="konsultacja" />
              <span></span>
              <div>Konsultacja</div>
            </label>
            <label className="radio">
              <input type="radio" {...register("visit")} value="ból zęba" />
              <span></span>
              <div>Ból zęba</div>
            </label>
            <label className="radio">
              <input type="radio" {...register("visit")} value="profilaktyka" />
              <span></span>
              <div>Profilaktyka</div>
            </label>
            <label className="radio">
              <input type="radio" {...register("visit")} value="kontrola" />
              <span></span>
              <div>Kontrola</div>
            </label>
            <label className="radio">
              <input type="radio" {...register("visit")} value="leczenie" />
              <span></span>
              <div>Leczenie</div>
            </label>
            <label className="radio">
              <input type="radio" {...register("visit")} value="inne" />
              <span></span>
              <div>Inne</div>
            </label>
          </fieldset>
        ) : undefined}

        <label>
          Treść wiadomości (opcjonalnie)
          <textarea
            placeholder="Treść wiadomości"
            {...register("message")}
          ></textarea>
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            {...register("privacy", {
              required: {
                value: true,
                message: "Zaznacz zgodę",
              },
            })}
            aria-invalid={errors.privacy ? "true" : "false"}
          />
          <span></span>
          <div>
            Zapoznałem (-am) się z Polityką prywatności.{" "}
            <Link to="/">Treść polityki prywatności.</Link> * &nbsp;&nbsp;{" "}
            {errors.privacy && (
              <span className="errorMessage">{errors.privacy?.message}</span>
            )}
          </div>
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            {...register("personalData", {
              required: {
                value: true,
                message: "Zaznacz zgodę",
              },
            })}
            aria-invalid={errors.personalData ? "true" : "false"}
          />
          <span></span>
          <div>
            Wyrażam zgodę na przetwarzanie moich danych osobowych.{" "}
            <Link to="/">Treść zgody.</Link> * &nbsp;&nbsp;{" "}
            {errors.personalData && (
              <span className="errorMessage">
                {errors.personalData?.message}
              </span>
            )}
          </div>
        </label>

        <button className="btn btnPrimary" type="submit">
          Wyślij
        </button>
        {errors && console.log(errors)}
        {/* {errors && console.log(Object.values(errors).map(error => error.message))} */}
      </form>
    </>
  )
}

// Form.propTypes = {
//   contactData: PropTypes.object,
// }

// Form.defaultProps = {
//   contactData: "",
// }

export default Form
