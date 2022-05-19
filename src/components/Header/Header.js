import React from 'react'

function Header({ total, money }) {
    return (
        <>
            <div>
                {total > 0 && money - total !== 0 && (
                    <div> Xərclənəck{money - total} $ pulunuz qaldi</div>
                )}
                {total === 0 && (
                    <div> Xərcəmək üçün {money - total} $ pulunuz var</div>
                )}
                {money - total === 0 && (
                    <div>Pulunuz bitti</div>
                )}
            </div>
        </>
    )
}

export default Header