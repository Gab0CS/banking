import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Gabriel' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox
                type="greeting"
                title="Bienvenido"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Accede y maneja de una manera inteligente tus recursos"
            />
            <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={122250.43}
            />
        </header>
      </div>
    </section>
  )
}

export default Home
