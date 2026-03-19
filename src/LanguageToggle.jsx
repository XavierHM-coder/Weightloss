function LanguageToggle() {

  const changeLanguage = (lang) => {

    const interval = setInterval(() => {

      const select = document.querySelector(".goog-te-combo")

      if (select) {
        select.value = lang
        select.dispatchEvent(new Event("change"))

        clearInterval(interval) // 🔥 ya encontró el select
      }

    }, 300) // intenta cada 300ms

  }

  return (
    <div className="lang-toggle">
      <button onClick={() => changeLanguage("es")}>ES</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  )
}

export default LanguageToggle