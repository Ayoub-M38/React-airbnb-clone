export default function Card() {
    return (
        <div className="card">
            <div>
                <img src={require('../image/image 12.png')} alt="" className='card--image' />
                <div className="card--stats">
                    <img src={require('../image/Star 1.png')} alt="" className='star--image' />
                    <span>5.0</span>
                    <span className='gray'>(6) . </span>
                    <span className='gray'>USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className='bold'>From $136</span> / person</p>
            </div>
            <div>
                <img src={require('../image/wedding-photography 1.png')} alt="" className='card--image' />
                <div className="card--stats">
                    <img src={require('../image/Star 1.png')} alt="" className='star--image' />
                    <span>5.0</span>
                    <span className='gray'>(30) . </span>
                    <span className='gray'>USA</span>
                </div>
                <p>Learn wedding photography</p>
                <p><span className='bold'>From $125</span> / person</p>
            </div>
            <div>
                <img src={require('../image/mountain-bike 1.png')} alt="" className='card--image' />
                <div className="card--stats">
                    <img src={require('../image/Star 1.png')} alt="" className='star--image' />
                    <span>4.8</span>
                    <span className='gray'>(2) . </span>
                    <span className='gray'>USA</span>
                </div>
                <p>Group Mountain<br />Biking</p>
                <p><span className='bold'>From $50</span> / person</p>
            </div>
        </div>
    )
}