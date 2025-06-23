import styles from "./Reserve.module.css";

export default function Reserve() {
  // Lista de modelos de Taycan
  const taycanModels = [
    "Taycan",
    "Taycan 4S",
    "Taycan Turbo",
    "Taycan Turbo S",
    "Taycan GTS",
    "Taycan Cross Turismo",
    "Taycan Sport Turismo",
  ];

  return (
    <section className={styles.sectionReserve}>
      <div className={styles.containerReserve}>
        <div className={styles.text}>
          <h2>Reserve Your Taycan Today.</h2>
          <p>
            Take the first step towards electric performance. Reserve your
            Taycan today and experience the future of driving.
          </p>
          <img
            className={styles.logoPorsche}
            src="./assets/Logotipo.png"
            alt="Porsche logo"
          />
        </div>
        <div className={styles.form}>
          <h2 className={styles.titleForm}>FILL OUT FORM SELOW TO RESERVE</h2>
          <form>
            <div className={styles.formInputs}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formInputs}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formInputs}>
              <label htmlFor="phone">Teléfono</label>
              <input type="number" id="phone" name="phone" required />
            </div>
            <div className={styles.formInputs}>
              <label htmlFor="model">Modelo Taycan</label>
              <select
                id="model"
                name="model"
                required
                className={styles.selectForm}
              >
                <option value="">Selecciona un modelo</option>
                {taycanModels.map((model) => (
                  <option
                    className={styles.optionForm}
                    key={model}
                    value={model}
                  >
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className={styles.submitButton}>
              Reservar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
