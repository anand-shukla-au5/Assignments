import React from 'react'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard';

export default function Layout() {
    return (
        <main className='p-4'>
            <header className="sticky top-0 z-30">
                <Header />
            </header>
            <section>
                <Dashboard />
            </section>
        </main>
    )
}
