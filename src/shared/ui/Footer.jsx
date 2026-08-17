import { social } from "../content/social";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {social.name}
        </p>
        <p className="text-xs tracking-wide text-muted/80">AI · ML · LLM Engineering</p>
      </Container>
    </footer>
  );
};

export default Footer;
