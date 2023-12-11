import DefaultLayout from "@/components/layouts/DefaultLayout";
import Banner from "@/components/sections/Banner";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <DefaultLayout>
      <Banner
        image={{
          desktopSrc: "/assets/wide-banner.png",
          mobileSrc: "/assets/normal-banner.png",
          alt: "A beautiful banner."
        }}
      />
      <Hero
        image={{
          src: "/assets/eco-store.png",
          alt: "eco store"
        }}
        content={{
          title: "Your Gateway to Sustainable Living",
          subTitle: "Connect, Explore, Thrive",
          description: "Empowering Your Eco-Conscious Journey with Local Green Choices!",
          button: {
            href: "/explore",
            text: "Find businesses"
          }
        }}
      />
    <Hero
        image={{
          src: "/assets/eco-store-2.png",
          alt: "eco store"
        }}
        content={{
          title: "Navigating a Greener Future",
          subTitle: "Engage, Discover, Flourish",
          description: "Fostering Your Green Lifestyle with Community-Driven Choices!",
          button: {
            href: "/explore",
            text: "Explore"
          }
        }}
        inverse
      />
    </DefaultLayout>
  )
}
