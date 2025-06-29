"use client";

import React, { useState } from 'react'
import { Link } from '@radix-ui/themes'
import { FaXTwitter } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";

// You'll need to create or install these components/utilities
// For now, I'm providing basic implementations

// Basic Input component (you can replace with your shadcn/ui version)
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// Basic Textarea component
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

// Basic Label component
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ''}`}
    {...props}
  />
))
Label.displayName = "Label"

// Basic Button component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Basic Title component
const Title = ({ title }: { title: string }) => (
  <h1 className="text-3xl font-bold text-center">{title}</h1>
)

// Toast implementation (basic)
const toast = {
  success: (message: string) => {
    // You can replace this with your preferred toast library
    console.log('Success:', message);
    alert(`Success: ${message}`);
  },
  error: (message: string) => {
    // You can replace this with your preferred toast library
    console.log('Error:', message);
    alert(`Error: ${message}`);
  }
}

// Basic ApiResponse type
interface ApiResponse {
  success: boolean;
  message: string;
}

// Font utility (you can create this or remove if not needed)
const bricolage_grotesque = "font-sans"; // Replace with your actual font class

const Contact = () => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isEmailSending, setIsEmailSending] = useState<boolean>(false)

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const sendEmailMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsEmailSending(true);
        try {
            // Using fetch instead of axios to avoid dependency issues
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    message
                })
            });

            const data: ApiResponse = await response.json();

            if (data.success) {
                toast.success(data.message);
                setEmail('');
                setMessage('');
            } else {
                toast.error(data.message);
            }

        } catch (err) {
            const error = err as Error;
            toast.error(error.message || 'An error occurred');
        } finally {
            setIsEmailSending(false);
        }
    };

    return (
        <div className='w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-6 pb-8'>
            <Title title='Get in Touch' />

            <div className={`w-full flex flex-col gap-3 mt-6 px-36 max-sm:px-4 ${bricolage_grotesque}`}>
                <div>
                    <h2 className='text-lg max-sm:text-base'>Have a Question? Let&apos;s Chat!</h2>
                </div>
                <div className='flex gap-3 mt-2'>
                    <Link href="https://cal.com/fardeen26/15min" target="_blank">
                        <button className='bg-[#4ADE80] text-black py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#42bc6f]'>
                            <SiLivechat className='h-[18px] w-[18px]' /> Book a meet
                        </button>
                    </Link>

                    <Link href="https://twitter.com/messages/compose?recipient_id=1596464580753911810" target="_blank">
                        <button className='bg-[#1D9BF0] text-white py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#2e7bae]'>
                            <FaXTwitter className='h-[18px] w-[18px]' /> Chat on Twitter
                        </button>
                    </Link>
                </div>

                <div className='mt-6'>
                    <h2 className='text-lg text-start max-sm:text-base'>Reach Out via Email</h2>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-4 w-full">
                        <form className='flex flex-col gap-4' onSubmit={sendEmailMessage}>
                            <div className="grid w-full gap-2">
                                <Label htmlFor="email">Your Email</Label>
                                <Input 
                                    id="email"
                                    type="email" 
                                    className='w-full h-full border' 
                                    placeholder='johndoe69@xyz.com' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="grid w-full gap-2">
                                <Label htmlFor="message">Your message</Label>
                                <Textarea 
                                    placeholder="Type your message here." 
                                    id="message" 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    required 
                                    minLength={5} 
                                />
                            </div>
                            <Button 
                                type="submit"
                                className='mt-3'
                                disabled={isEmailSending}
                            >
                                {isEmailSending ? 'Sending Message...' : 'Send message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact