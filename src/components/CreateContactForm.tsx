import React from "react";
import { twMerge } from "tailwind-merge";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "./InputField";
import { useCreateContactMutation } from "../store/api/apiSlice";
import Loader from "../assets/icons/loader";
import Button from "./Button";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email("Email is invalid."),
});

type FormValues = z.infer<typeof schema>;

interface ContactFormProp {
  className?: string;
}

const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const CreateContactForm: React.FC<ContactFormProp> = ({ className }) => {
  const [createContact] = useCreateContactMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    const contact = {
      record_type: "person",
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
      fields: {
        "first name": [
          { value: data.firstName, modifier: "", label: "first name" },
        ],
        "last name": [
          { value: data.lastName, modifier: "", label: "last name" },
        ],
        email: [{ value: data.email, modifier: "", label: "email" }],
      },
    };

    try {
      await createContact(contact).unwrap();
      reset();
      console.log("Contact created successfully");
    } catch (error) {
      console.error("Failed to create contact", error);
    }
  };

  return (
    <div
      className={twMerge(
        "block lg:sticky top-9 left-0 w-full p-4 bg-white rounded-lg shadow-md",
        className
      )}
    >
      <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <InputField
              id="firstName"
              label="First Name"
              value={field.value || ""}
              onChange={field.onChange}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <InputField
              id="lastName"
              label="Last Name"
              value={field.value || ""}
              onChange={field.onChange}
              error={errors.lastName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              id="email"
              label="Email"
              type="email"
              value={field.value}
              onChange={field.onChange}
              error={errors.email?.message}
            />
          )}
        />
        <Button type="submit">Add Contact {isSubmitting && <Loader />}</Button>
      </form>
    </div>
  );
};

export default CreateContactForm;
