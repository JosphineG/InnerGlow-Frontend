import React from "react";

function SelectLang({ language, setLanguage }) {
  return (
    <>
      {/* Language selection dropdown */}
      <div className="mr-4">
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="p-2 border rounded-lg"
        >
          <option value="es">🇪🇸 Spanish</option>
          <option value="fr">🇫🇷 French</option>
          <option value="de">🇩🇪 German</option>
          <option value="it">🇮🇹 Italian</option>
          <option value="ru">🇷🇺 Russian</option>
          <option value="sw">🇰🇪 Swahili</option>{" "}
          {/* Swahili option, Kenyan flag for Swahili */}
          <option value="zh">🇨🇳 Chinese</option> {/* Chinese flag */}
          <option value="ar">🇸🇦 Arabic</option>{" "}
          {/* Saudi Arabia flag for Arabic */}
          <option value="pt">🇵🇹 Portuguese</option> {/* Portuguese flag */}
          <option value="ja">🇯🇵 Japanese</option> {/* Japanese flag */}
          <option value="ko">🇰🇷 Korean</option> {/* Korean flag */}
          <option value="hi">🇮🇳 Hindi</option> {/* Indian flag for Hindi */}
          <option value="bn">🇧🇩 Bengali</option>{" "}
          {/* Bangladeshi flag for Bengali */}
          <option value="tr">🇹🇷 Turkish</option> {/* Turkish flag */}
          <option value="pl">🇵🇱 Polish</option> {/* Polish flag */}
          <option value="ro">🇷🇴 Romanian</option> {/* Romanian flag */}
        </select>
      </div>
    </>
  );
}

export default SelectLang;
