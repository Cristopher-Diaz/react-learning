import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
  const formatUserName = (userName) => `@${userName}`

  return (
    // React.Fragment === <></>
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="dog" 
        initialIsFollowing={false}>
          Perrito dalmata
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Sebakys" 
        initialIsFollowing={true}>
          Sebastian
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Cristopher-Diaz" 
        initialIsFollowing={true}>
          El Cabro Gato
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="gonzalo" 
        initialIsFollowing={false}>
          Chico Gonzalo
      </TwitterFollowCard>
      
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="letuse" 
        initialIsFollowing={false}>
          Pablo Torres
      </TwitterFollowCard>
    </section>
  )
}