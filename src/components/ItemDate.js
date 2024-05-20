import './ItemDate.css';

function ItemDate(data){
    return (<div className='mfg-date'>
        <span>{data.date}</span>
        <span> {data.month}</span>
        <span> {data.year}</span>
    </div>);
}

export default ItemDate;