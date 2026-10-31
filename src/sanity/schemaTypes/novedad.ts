import { defineField, defineType } from "sanity";

// La sección se llama "Ideas" (contenidos 2026). Sólo cambia la etiqueta visible
// del Studio (title); el nombre interno sigue siendo "novedad" porque lo usan
// los documentos ya cargados, las queries (_type == "novedad") y el webhook de
// revalidación. No renombrarlo sin migrar los datos.
export const novedad = defineType({
  name: "novedad",
  title: "Idea",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Resumen",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "link",
      title: "Link (LinkedIn u otro)",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "buttonText",
      title: "Texto del botón",
      type: "string",
      initialValue: "Saber más",
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "publishedAt",
    },
  },
});
