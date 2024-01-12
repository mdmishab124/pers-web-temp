import React from "react";

// import components
import TestimonialSlider from '../components/TestimonialSlider'
import { contact } from "../data";

const Testimonials = () => {
    return <section id="Testimonials" className="section bg-secondary">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title 
                before:content-testimonials relative
                before:absolute before:opacity-40
                before:-top-[2rem] before:-left-64
                before:hidden before:lg:block">
                What other people say
                </h2>
                <p className="subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Nostrum dicta in autem quibusdam distinctio, 
                asperiores blanditiis officiis tenetur. Repudiandae, esse.
                </p>
            </div>
            <TestimonialSlider />
        </div>
    </section>
}

export default Testimonials