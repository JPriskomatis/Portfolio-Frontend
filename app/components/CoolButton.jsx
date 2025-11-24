// FancyButton.tsx
import React from 'react';
import i18n from '../Data/i18';
import {useTranslation} from 'react-i18next'

export function CoolButton() {
  const {t} = useTranslation();
  return (
    <button
      className="cursor-pointer bg-newGreen shadow-[8px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
    >
      <div className="relative overflow-hidden ">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {t("talk")}
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ">
          {t("contact")}
        </p>
      </div>
    </button>
  );
}
export default CoolButton
