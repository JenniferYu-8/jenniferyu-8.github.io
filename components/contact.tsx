"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmails';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-5 dark:text-gray-100/80 transition-colors duration-500">Please contact me directly at <a className="underline" href="mailto:jenniferyu.on@gmail.com">jenniferyu.on@gmail.com</a>{" "} or through this form.</p>
        <form className="mt-10 flex flex-col dark:text-black transition-colors duration-500" action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
                toast.error(error);
                return;
            }

            toast.success("Email sent successfully!");
        }}>
            <input type="email" required maxLength={500} name="senderEmail" className="h-14 px-4 rounded-lg borderBlack 
                dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder-gray-500 duration-500" placeholder="Your email"/>
            <textarea required maxLength={5000} name="message" className="h-52 my-3 rounded-lg borderBlack p-4
                dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder-gray-500 duration-500" placeholder="Your message"/>
            <SubmitBtn></SubmitBtn>
        </form>

    </motion.section>
  )
}
