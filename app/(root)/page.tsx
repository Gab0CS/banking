import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { 
      firstName: 'Gabriel', 
      lastName: 'Canseco', 
      email: 'gabocanseco@gmail.com'
    };
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

        Recent Transactions
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.45}, 
          {currentBalance: 678.90}]}
      />
    </section>
  )
}

export default Home
