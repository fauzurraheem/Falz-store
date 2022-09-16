import Image from 'next/image'
import React from 'react'
import girl4 from '../assets/images/girl4.jpg'
import page from '../assets/webp/page-header-bg.jpg'
import image29 from '../assets/webp/image29.webp'
import image30 from '../assets/webp/image30.webp'
import image31 from '../assets/webp/image31.webp'
import image32 from '../assets/webp/image32.webp'
import image33 from '../assets/webp/image33.webp'
import image34 from '../assets/webp/image34.webp'
import image35 from '../assets/webp/image35.webp'




const About = () => {
  return (
    <div>
      <div className='	 w-full h-44 flex items-center justify-center '>
        <div className='absolute -z-10 w-full h-44'>
            <Image src={page}
            layout="fill"
            objectFit="cover"
            objectPosition='center'
            quality={100} alt=''
             />
        </div>
        <h1 className='text-4xl font-medium'>About Us</h1>
      </div>
      <div className=' lg:flex mt-32 px-8 items-center '>
        <div className='lg:w-2/4 lg:pr-8 mb-14'>
          <h2 className='text-3xl font-medium '>Welcome to our KachaBazar</h2>
          <p className='mt-6'>
          Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
          </p>
          <p className='my-5'>
          Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
          </p>
          <div className='sm:flex'>
            <div className='shadow-sm bg-indigo-50 p-6 sm:w-[40%]  rounded-2xl m-3'>
              <h2 className='text-2xl font-semibold	mb-2 text-slate-800	'>10K</h2>
              <h4 className='text-xl mb-4 font-medium'>Listed Products</h4>
              <p>Dynamically morph team driven partnerships after vertical.</p>
            </div>
            <div className='shadow-sm bg-indigo-50 p-6 sm:w-[40%]   rounded-2xl m-3'>
              <h2 className='text-2xl font-semibold	mb-2 text-slate-800	'>8K</h2>
              <h4 className='text-xl mb-4 font-medium'>Lovely Customer</h4>
              <p>Competently productize virtual models without performance.</p>
            </div>
          </div>
        </div>
       <div className='lg:w-2/4 w-full'>
        <Image className='rounded-2xl' src={image32} alt='' width={1000} height={700}/>
       </div>
          
       
      </div>
      <div className='m-8'>
        <p>
        Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.
        </p>
      </div>
      <div className='m-8 '>
        <p>
        Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets. Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
        </p>
      </div>
      <div className=' flex justify-center m-8' >
        <Image className='rounded-2xl' src={image33} width={800} height={400} quality={100}/>
      </div>
      <div className='mt-32 mb-20 mx-8'>
        <h2 className='text-4xl font-bold'>Our Founder</h2>
        <p className='my-6 text-'>We're impartial and independent, and every day we create distinctive, world-class reintermediate backend supply programmes.</p>
        <div className='sm:flex flex-wrap grid justify-items-center	 '>
            <div className='m-2 '>
                <div>
                  <Image  className='rounded-lg' src={image31} width={150} height={150} />
                </div>
                <div className=''>
                  <h3 className='font-bold'>Niamh Shea</h3>
                  <p className='text-sm'>Co-founder & Executive</p>
                </div>
              </div>
              <div className='m-2'>
                <div>
                <Image className='rounded-lg' src={image30} width={150} height={150} />
                </div>
                <div>
                  <h3 className='font-bold'> Orla Dwyer</h3>
                  <p className='text-sm'>Chief Executive</p>
                </div>
              </div>
              <div className='m-2'>
                <div>
                <Image className='rounded-lg' src={image29} width={150} height={150} />
                </div>
                <div>
                  <h3 className='font-bold'>Danien James</h3>
                  <p className='text-sm'>Co-founder, Chairman</p>
                </div>
              </div>
              <div className='m-2'>
                <div>
                <Image className='rounded-lg' src={girl4} width={150} height={150} />
                </div>
                <div>
                  <h3 className='font-bold'>Dara Frazier</h3>
                  <p className='text-sm'>Chief Stategy Officer</p>
                </div>
              </div>
              <div className='m-2'>
                <div>
                <Image className='rounded-lg' src={image34} width={150} height={150} />
                </div>
                <div>
                  <h3 className='font-bold'>Glenda Arvidson</h3>
                  <p className='text-sm'>HR Officer</p>
                </div>
              </div>
              <div className='m-2'>
                <div >
                <Image className='rounded-lg' src={image35} width={150} height={150} />
                </div>
                <div>
                  <h3 className='font-bold'>Melvin Davis</h3>
                  <p className='text-sm'>Lead Developer</p>
                </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default About