use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="RetroMemeCoin Logo"
          logoWidth="100"
          logoHeight="100"
          buttonText="Buy Now"
          onButtonClick={() => {}}
          className="sticky"
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to RetroMemeCoin"
          subtitle="Experience nostalgia with every transaction"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About RetroMemeCoin"
          descriptions={[
            "RetroMemeCoin combines the joy of arcade nostalgia and modern cryptocurrency.",
            "Join a community that values memories and investment opportunities.",
            "Create, trade, and experience the excitement!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy RetroMemeCoin"
          steps={[
            { title: "Step 1", description: "Create a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase your coins", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Join the community", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Understanding the key metrics of RetroMemeCoin"
          kpiItems={[
            { value: "1M", description: "Total Supply", icon: LucideIcon },
            { value: "500K", description: "Market Cap", icon: LucideIcon },
            { value: "300K", description: "Liquidity", icon: LucideIcon }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="RetroMemeCoin Logo"
          logoText="RetroMemeCoin"
          className="footer-class"
          svgClassName="footer-svg-class"
        />
      </div>
    </SiteThemeProvider>
  );
}