import { HoverEffect } from "./ui/card-hover-effect";

export function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Custom Bridal Collection",
    description:
      "Exquisite bridal wear featuring intricate embroidery, premium fabrics, and personalized designs that make every bride feel unique and special.",
    link: "/bridal-collection",
  },
  {
    title: "Designer Bags Collection",
    description:
      "Handcrafted luxury bags featuring unique designs, premium materials, and expert craftsmanship that blend traditional techniques with contemporary style.",
    link: "/bags-collection",
  },
  {
    title: "Fashion Consultancy",
    description:
      "Professional styling advice and personalized fashion consultations to help you create your perfect wardrobe and enhance your personal style.",
    link: "/fashion-consultancy",
  },
  {
    title: "Custom Accessories",
    description:
      "Bespoke accessories including clutches, evening bags, and statement pieces designed to complement your outfit perfectly.",
    link: "/accessories",
  },
  {
    title: "Seasonal Collections",
    description:
      "Explore our latest seasonal collections featuring contemporary fashion pieces and trendsetting bag designs for every occasion.",
    link: "/seasonal-collections",
  },
  {
    title: "Design Workshop",
    description:
      "Join our exclusive design workshops to learn about fashion design, bag making, and the art of creating bespoke fashion pieces.",
    link: "/workshops",
  },
];
