"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // server-side validation
    if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
        return {
            error: "Invalid input",
        }
    }

    let data;

    try {
        data = await resend.emails.send({
            from: 'JYu Portfolio Contact Form <onboarding@resend.dev>',
            to: "jenniferyu.on@gmail.com",
            subject: "Message from contact form",
            replyTo: senderEmail as string,
            text: message as string,
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }

    return {
        data,
    };
}