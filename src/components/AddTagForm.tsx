import React from "react";
import { twMerge } from "tailwind-merge";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "./InputField";
import { useAddTagsMutation } from "../store/api/apiSlice";
import Loader from "../assets/icons/loader";
import { Tag } from "../types/contacts";
import Button from "./Button";

const schema = z.object({
  tags: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

interface AddTagFormProp {
  className?: string;
  contactId: string;
  tagState: Tag[];
}

const defaultValues: FormValues = {
  tags: "",
};

const AddTagForm: React.FC<AddTagFormProp> = ({
  className,
  contactId,
  tagState,
}) => {
  const [addTags] = useAddTagsMutation();
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
    const tagsArray = data.tags.split(",").map((tag) => tag.trim());
    const prevTags = tagState.map((item) => item.tag);
    try {
      await addTags({
        id: contactId,
        tags: [...prevTags, ...tagsArray],
      }).unwrap();
      reset();
    } catch (error) {
      console.error("Failed to add tags", error);
    }
  };

  return (
    <div className={twMerge(className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <InputField
              id="tags"
              placeholder="Add new Tags"
              value={field.value || ""}
              onChange={field.onChange}
              error={errors.tags?.message}
            />
          )}
        />
        <Button type="submit" className="">
          Add Tags {isSubmitting && <Loader />}
        </Button>
      </form>
    </div>
  );
};

export default AddTagForm;
