import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 p-5 md:p-10 items-center md:items-stretch">
  {/* Contact Box */}
  <div className="min-h-[350px] h-auto w-full md:w-1/3 rounded-lg overflow-hidden flex flex-col justify-center items-center text-center border-2 border-white bg-black text-white p-5 md:p-7 hover:scale-105 transform duration-75">
    <p className="text-[clamp(1.8rem, 5vw, 3rem)] special-font hero-headingcon text-blue-100 uppercase tracking-wide">
      HAVE ANY QUESTIONS?
    </p>
    <p className="text-[clamp(2rem, 6vw, 4rem)] special-font hero-headingcon text-blue-100 uppercase tracking-wide">
      CONTACT US
    </p>
    <div className="flex flex-col items-center mt-4">
      <p className="text-xl md:text-2xl font-bold text-tedRed">Kevin</p>
      <p className="text-lg md:text-xl font-bold">enthengilum, SARGAMx25</p>
      <a href="tel:+919895545390" className="text-lg md:text-xl font-bold">
        +91 12323232
      </a>
    </div>
    <div className="flex flex-col items-center mt-4">
      <p className="text-xl md:text-2xl font-bold text-tedRed">Kevin</p>
      <p className="text-lg md:text-xl font-bold">enthengilum, SARGAMx25</p>
      <a href="tel:+919895545390" className="text-lg md:text-xl font-bold">
        +91 12323232
      </a>
    </div>
</div>


  {/* Follow Us Box */}
  <div className="min-h-[350px] h-auto w-full md:w-1/3 rounded-lg overflow-hidden flex flex-col items-center justify-center border-2 border-white bg-black p-5 md:p-7 hover:scale-105 transform duration-75">
    <p className="text-center text-[clamp(2rem, 5vw, 3.5rem)] font-extrabold uppercase tracking-normal">
    <h1 className="special-font hero-headingcon text-blue-100">
             Follow us On
            </h1>

       
    </p>
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      {/* <a href="mailto:organizer@tedxcusat.in" target="_blank" rel="noreferrer">
        <img alt="Gmail" loading="lazy" width="50" height="50" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGmail.3de2f865.png&w=128&q=75" className="rounded-md" />
      </a>
      <a href="https://www.instagram.com/tedxcusat/" target="_blank" rel="noreferrer">
        <img alt="Instagram" loading="lazy" width="50" height="50" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInstagram.10619823.png&w=128&q=75" className="rounded-md" />
      </a>
      <a href="https://www.youtube.com/@tedxcusat8428" target="_blank" rel="noreferrer">
        <img alt="YouTube" loading="lazy" width="50" height="50" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYouTube.b0e483f2.png&w=128&q=75" className="rounded-md" />
      </a> */}
    </div>
  </div>

  {/* Map Box */}
  <div className="min-h-[150px] h-auto w-full md:w-1/3 rounded-lg overflow-hidden border-2 border-white hover:scale-105 transform duration-75 p-5">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0967224437763!2d76.35932297478458!3d10.008869072882543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d36d17ab3%3A0x3cf6af7fe0b99871!2sAthulya%20Infopark!5e0!3m2!1sen!2sin!4v1726324333796!5m2!1sen!2sin"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg border-2 border-black w-full h-full"
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
};

export default Contact;






// <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
//         <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
//           <ImageClipBox
//             src="/img/contact-1.webp"
//             clipClass="contact-clip-path-1"
//           />
//           <ImageClipBox
//             src="/img/contact-2.webp"
//             clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
//           />
//         </div>

//         <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
//           <ImageClipBox
//             src="/img/swordman-partial.webp"
//             clipClass="absolute md:scale-125"
//           />
//           <ImageClipBox
//             src="/img/swordman.webp"
//             clipClass="sword-man-clip-path md:scale-125"
//           />
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <p className="mb-10 font-general text-[10px] uppercase">
//             Join SARGAM
//           </p>

//           <AnimatedTitle
//             title="let&#39;s join the <br /> new era of <br /> SARGAM t<b>o</b>gether."
//             className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
//           />

//           <Button title="contact us" containerClass="mt-10 cursor-pointer" />
//         </div>
//       </div>