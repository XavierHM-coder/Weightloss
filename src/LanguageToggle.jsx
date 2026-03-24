function LanguageToggle() {

  const changeLanguage = (lang) => {

    const tryChange = () => {
      const select = document.querySelector(".goog-te-combo")

      if (select) {
        select.value = lang
        select.dispatchEvent(new Event("change"))
        return true
      }
      return false
    }

    // 🔥 intenta varias veces hasta que exista
    let attempts = 0
    const interval = setInterval(() => {
      if (tryChange() || attempts > 10) {
        clearInterval(interval)
      }
      attempts++
    }, 300)
  }

  return (
    <div className="lang-toggle">
      <button onClick={() => changeLanguage("es")}>ES</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  )
}

export default LanguageToggle