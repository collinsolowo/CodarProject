import trans1 from './trans1.jpg'
import trans2 from './trans2.jpg'
import trans3 from './trans3.jpg'
import './transferList.css'

function TransferList() {
    return (
        <>
            <div className='transferHouse'>
                <div className='transfer-Topic'>
                    <marquee>CHECK ON ALL THE LATEST TRANSFER NEWS HERE</marquee>
                </div>
                <div className='transfer-Box-House'>
                    <div className='each-Box'>
                        <img src={trans1} alt='' />
                        <div className='pHouse'>
                            <p>𝐇𝐄𝐑𝐄 𝐖𝐄 𝐆𝐎! Newcastle agree deal to sign William Osula, medical booked today ⚪️⚫️✨
                                Sheffield United talent joins Newcastle on £10m fixed fee plus £5m add-ons, contract is also 100% agreed.
                                Osula, already arrived for medical tests later today.</p>
                        </div>
                    </div>
                    <div className='each-Box'>
                        <img src={trans2} alt='' />
                        <div className='pHouse'>
                            <p>🔴⚪️ Despite reports, Conor Gallagher has not travelled to Madrid yet as there are some formal steps to complete.
                                Chelsea and Atléti, in touch to prepare documents in order to sign €40m deal and let Conor fly to Spain.
                                ℹ️ Gallagher said yes to Atléti, as exclusively revealed.
                            </p>
                        </div>
                    </div>
                    <div className='each-Box'>
                        <img src={trans3} alt='/' />
                        <div className='pHouse'>
                            <p>Manchester City are willing to let Julian Alvarez leave the club if wants to go, but only for a fee higher than €50m! 😲
                                Both PSG and Atlético Madrid are interested in signing him and have been calling his agent since June! 👀
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransferList