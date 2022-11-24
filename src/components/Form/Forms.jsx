import * as React from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

import CalendarIcon from "../../svg/icon-calendar.svg"

const Form = ({ type }) => {
  const [formIsSubmitted, setFormIsSubmitted] = React.useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { privacy: false, data: false } })

  const onSubmit = data => {
    console.log(data)
    setFormIsSubmitted(true)
    reset()
  }

  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <>
      {type === "contact" ? (
        <h2 style={{ marginBottom: "var(--size-gap)" }}>Wypełnij formularz</h2>
      ) : undefined}
      <form
        method="post" netlify-honeypot="bot-field" data-netlify="true" name="contactWrozkaZebuszka"
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        className={`${type === "contact" ? "contactPageForm" : ""} ${
          inView ? "fadeIn" : ""
        }`}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contactWrozkaZebuszka" />
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
                right: "0.25rem",
                zIndex: "-1",
                width: "1.75rem",
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
            <Link to="/polityka-prywatnosci">Treść polityki prywatności.</Link>{" "}
            * &nbsp;&nbsp;{" "}
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
        <div>
          {formIsSubmitted && (
            <span className="successMessage">
              Dziękujemy za przesłanie formularza
            </span>
          )}
        </div>
      </form>
    </>
  )
}

Form.propTypes = {
  type: PropTypes.string,
}

Form.defaultProps = {
  type: "",
}

export default Form
