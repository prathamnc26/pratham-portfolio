function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Pratham Nilesh Chudasama</p>
      <p className="mt-1">Code. Build. Deploy.</p>
    </footer>
  );
}

export default Footer;