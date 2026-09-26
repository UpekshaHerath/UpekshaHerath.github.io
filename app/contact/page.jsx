"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  sendEmail,
  sendToast,
  validateEmail,
  validateMobileNumber,
} from "@/lib/contact";
import { Toaster } from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 77 3128 452",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "upekshah.official@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Thalammehera, Pannala, Sri Lanka",
  },
];


const Contact = () => {
  const form = useRef();
  const [isEmailValidated, setIsEmailValidated] = useState(true);
  const [isMobileNumberValidated, setIsMobileNumberValidated] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const submitContactForm = async (e) => {
    e.preventDefault();
    if (isSending) return;
    if (!isEmailValidated && !isMobileNumberValidated) {
      sendToast("Invalid email", "error");
      sendToast("Invalid mobile number", "error");
      return;
    } else if (!isMobileNumberValidated) {
      sendToast("Invalid mobile number", "error");
      return;
    } else if (!isEmailValidated) {
      sendToast("Invalid email", "error");
      return;
    }
    setIsSending(true);
    const sent = await sendEmail(form);
    setIsSending(false);
    // keep what the visitor typed if sending failed
    if (sent) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <section className="animate-in fade-in duration-500 py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={(e) => submitContactForm(e)}
              className="flex flex-col gap-6 p-6 xl:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl xl:text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Have a project, a role, or just want to talk tech? Drop me a
                message and I'll get back to you soon. 🤩
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  required
                  type="firstname"
                  placeholder="Firstname"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                />
                <Input
                  required
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  className={
                    !isEmailValidated && `focus:border-red-500 border-red-500`
                  }
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                    setIsEmailValidated(validateEmail(e.target.value));
                  }}
                />
                <Input
                  required
                  type="phone"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  className={
                    !isMobileNumberValidated &&
                    `focus:border-red-500 border-red-500`
                  }
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      phoneNumber: e.target.value,
                    });
                    setIsMobileNumberValidated(
                      validateMobileNumber(e.target.value)
                    );
                  }}
                />
              </div>

              <Input
                type="subject"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
              />

              <Select
                name="service"
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    service: value,
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="ai and agentic systems">
                      AI &amp; Agentic Systems
                    </SelectItem>
                    <SelectItem value="mobile development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="custom software">
                      Custom Software &amp; Databases
                    </SelectItem>
                    <SelectItem value="technical writing">
                      Technical Writing
                    </SelectItem>
                    <SelectItem value="job opportunity">
                      Job Opportunity
                    </SelectItem>
                    <SelectItem value="other service">Other Service</SelectItem>
                    <SelectItem value="just to contact">
                      Just to contact
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                required
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              />

              <Toaster
                toastOptions={{
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },
                }}
              />

              <div className="flex">
                <Button
                  size="md"
                  className="max-w-40 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-sm xsm:text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
