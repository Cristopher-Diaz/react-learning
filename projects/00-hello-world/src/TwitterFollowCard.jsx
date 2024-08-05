import React from 'react'

export function TwitterFollowCard({ children, userName = '' }) {
  console.log(React)
  const [ isFollowing, setIsfolowing ] = React.useState(false)

  console.log(isFollowing, setIsfolowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClasName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsfolowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClasName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}