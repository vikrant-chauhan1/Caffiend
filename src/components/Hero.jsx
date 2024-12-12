export default function Hero(){
    return(
        <>
            <h1>Coffee Tracking for Coffee <abbr title="An enthusiast or devotee">Fiends</abbr>!</h1>
            <div className="benefits-List">
                <h3 className="font-bolder">Try <span className="text-gradient">Caffiend</span> and start...</h3>
                <p>✅ Tracking every coffee</p>
                <p>✅ Measuring Your blood caffiene levels</p>
                <p>✅ Costing and quantifying your addiction</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know...</h3>
                </div>
                <h5>That caffeine's half-life is about 5 hours?</h5>
                <p>This means that after 5 hours, half the caffiene you consumed is still in your system, keeping you alert longer! so if you drink a cup of coffee with 200 mg of caffiene then 5 hours later you'll still have about 50mg of caffiene in our system  </p>

            </div>
        
        
        </>
    );
}