"use client";
import { SocialLinks } from "../landing/SocialLinks";
import { Input } from "../common/ui/input";
import { Button } from "../common/ui/button";
import { FormEventHandler, PropsWithChildren, useState } from "react";
import { Send, Check, AlertCircle } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";

export function GetInTouchForm({
  submitData,
}: {
  submitData: (data: object) => Promise<boolean>;
}) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const target = e.currentTarget;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const success = await submitData(data);
    setSuccess(success);
    setIsLoading(false);
    target.reset();
    setTimeout(() => {
      setSuccess(null);
      setIsLoading(false);
    }, 2000);
  };

  const getButtonIcon = () => {
    return (
      <>
        <AnimatePresence mode="popLayout">
          {!isLoading && success == null && (
            <motion.div
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ x: 50, y: -50 }}
            >
              <Send />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {!isLoading && success === true && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {!isLoading && success === false && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <AlertCircle className="text-red-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  const getButtonText = () => {
    if (isLoading) return "Sending..";
    if (success == null) return "Send";
    if (success === true) return "Sent";
    return "Failed";
  };

  return (
    <form className="flex flex-col gap-4 lg:flex-1" onSubmit={onSubmit}>
      <Input placeholder="Your Name" required name="name" />
      <Input placeholder="Email" name="email" required type="email" />
      <Input placeholder="Your Website (If exists)" name="website" />
      <Input
        placeholder="How can I help ?"
        noOfLines={4}
        required
        name="message"
      />
      <div className="relative flex flex-col items-start gap-8 overflow-hidden pb-8 lg:flex-row lg:items-center lg:justify-between">
        <Button
          suffix={getButtonIcon()}
          typeof="submit"
          label={getButtonText()}
          className="overflow-hidden px-8 py-4 lg:px-6"
        />
        <div className="flex gap-4 lg:items-center">
          <SocialLinks />
        </div>
      </div>
    </form>
  );
}
