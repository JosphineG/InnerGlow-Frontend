import React from "react";

function SelectLang({ language, setLanguage }) {
  return (
    <>
      {/* Language selection dropdown */}
      <div className="mr-4">
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="p-2 border rounded-3xl"
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ru">Russian</option>
          <option value="sw">Swahili</option> {/* Swahili option */}
          <option value="zh">Chinese</option> {/* Chinese */}
          <option value="ar">Arabic</option> {/* Arabic */}
          <option value="pt">Portuguese</option> {/* Portuguese */}
          <option value="ja">Japanese</option> {/* Japanese */}
          <option value="ko">Korean</option> {/* Korean */}
          <option value="hi">Hindi</option> {/* Hindi */}
          <option value="bn">Bengali</option> {/* Bengali */}
          <option value="tr">Turkish</option> {/* Turkish */}
          <option value="pl">Polish</option> {/* Polish */}
          <option value="ro">Romanian</option> {/* Romanian */}
        </select>
      </div>
    </>
  );
}

export default SelectLang;
