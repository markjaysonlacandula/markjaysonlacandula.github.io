import React from 'react'

const ButtonSecondary = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="font-semibold text-base text-personal-neutralLight border-2 border-personal-neutralLight hover:border-personal-primary rounded-lg bg-gradient-to-r from-personal-primaryDark to-personal-primaryLight bg-no-repeat dark:from-personal-secondaryDark dark:to-personal-secondaryLight transition-all duration-300 ease-in bg-[length:0%] px-6 py-4 hover:rounded-full hover:bg-[length:100%] hover:shadow-2xl hover:text-personal-neutralLight dark:hover:border-personal-secondary"
    >
      {props.children}
    </button>
  )
}

export default ButtonSecondary