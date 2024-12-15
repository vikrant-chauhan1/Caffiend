import {calculateCurrentCaffeineLevel,coffeeConsumptionHistory,statusLevels,calculateCoffeeStats, getTopThreeCoffees} from "../utils"


function StatCard(props){
    const {lg,title,children}= props;
    return(
        <div className={"card stat-card "+ (lg? "col-span-2" : "")}>
            <h4>{title}</h4>
            {children}
        </div>
    );

}



export default function Stats(){

    const stats= calculateCoffeeStats(coffeeConsumptionHistory);
    

    const caffeineLevel=calculateCurrentCaffeineLevel(coffeeConsumptionHistory);
    const warningLevel= caffeineLevel < statusLevels.low.maxLevel?"low" : caffeineLevel<statusLevels.moderate.maxLevel?"moderate":"high";
    return(
        <>
            <div className="section-header">
                <i className="fa-solid fa-chart-simple" />
                <h2>Stats</h2>
            </div>
            <div className="stats-grid">
                <StatCard lg title="Active Caffiene Level">
                    <div className="status">
                        <p><span className="stat-text">{caffeineLevel}</span>mg</p>
                        <h5 style={{color:statusLevels[warningLevel].color,background:statusLevels[warningLevel].background}}>Low</h5>
                    </div>
                    <h5>{statusLevels.low.description}</h5>
                </StatCard>
                <StatCard title="Daily Caffiene">
                    <p><span className="stat-text">{stats.daily_caffeine}</span>mg</p>
                </StatCard>
                <StatCard title="Avg # of Coffees">
                <p><span className="stat-text">{stats.average_coffees}</span></p>
                </StatCard>
                <StatCard title="Daily cost ($)" >
                <p className="stat-text">$<span className="stat-text">{stats.daily_cost}</span></p>
                </StatCard>
                <StatCard title="Total Cost">
                <p className="stat-text">$<span className="stat-text">{stats.total_cost}</span></p>
                </StatCard>
                <table className="stat-table">
                    <thead>
                        <tr>
                            <th>Coffee Name</th>
                            <th>Number Of Purchase</th>
                            <th>Percentage Of Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getTopThreeCoffees(coffeeConsumptionHistory).map((coffee,coffeeInedx)=>{
                            return(
                                <tr key={coffeeInedx}>
                                    <td>{coffee.coffeeName}</td>
                                    <td>{coffee.count}</td>
                                    <td>{coffee.percentage}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                
            </div>
        
        
        
        </>
    );
}