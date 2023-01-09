import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const LiveMarket = () => {
    const marketPrice = [
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
        {
            prodName: 'Soybean (SBBS)',
            price: '#30,835.59'
        },
    ]

    const setting = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <div className='fixed bottom-0 bg-white font-semibold w-screen h-[51px]' style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <span className='bg-black text-white px-6 py-3 fixed bottom-0 z-30 h-[51px]'>Live Market</span>
            <div className='bg-inherit'>
                <Slider {...setting} className='overflow-hidden flex-1 flex items-center'>
                    {marketPrice.map((price, index) => (
                        <div key={index} className='bg-inherit text-sm px-8 py-1'>
                            <span className='semi-bold block'>{price.prodName}</span>
                            <span>{price.price}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default LiveMarket