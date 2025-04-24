import { UserIcon } from "lucide-react";
import Image from "next/image";
import { defineField, defineType, Preview } from "sanity";

export const userType = defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon,

  fields: [
    defineField({
      name: "username",
      title: "Username",
      type: "string",
      description: "The unique username for this user",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "User's email address",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imageUrl",
      title: "Image URL",
      type: "string",
      description: "User's Clerk profile picture",
    }),
    defineField({
      name: "joinedAt",
      type: "datetime",
      description: "When the user joined the platform",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "isReported",
      type: "string",
      description: "Indicates if the user has been reported",
      options: {
        list: [
          { title: 'No', value: "no" },
          { title: 'Yes', value: "yes" },
        ],
        layout: "radio",
      },
      initialValue: "no",
    }),
  ],
  preview: {
    select: {
      title: "username",
      subtitle: "email",
      media: "imageUrl",
    },
    prepare({ title, media }) {
      return {
        title,
        media: media ? (
          <Image src={media} alt={`${title}'s avatar`} width={40} height={40} />
        ) : (
          <UserIcon />
        ),
      };
    },
  },
});