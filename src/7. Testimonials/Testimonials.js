import "./style.css"

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const testimonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe"
        },
        {
            quote: "I highly recomend this product to everyone!",
            author: "Jane Smith"
        },
        {
            quote: "This product totally changed my life",
            author: "Taufaqur"
        },
    ]

    // the best code logic i had :')
    const handlePrevClick = () => {
        setCurrentIndex(
            (currentIndex + testimonials.length - 1) % testimonials.length
        )
    }
    const handleNextClick = () => {
        setCurrentIndex(
            (currentIndex + 1) % testimonials.length
        )
    }
    return <>
        <div className="testimonials">
            <div className="testimonials-quote">
                {
                    testimonials[currentIndex].quote
                }
            </div>
            <div className="testimonials-author">-
                {
                    testimonials[currentIndex].author
                }
            </div>
            <testimonials className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </testimonials>
        </div>
    </>
}

export default Testimonials;