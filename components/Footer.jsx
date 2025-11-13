export default function Footer() {
  return (
    <footer className="text-center mt-12 border-t border-gray-200 dark:border-gray-800 py-6 text-sm text-gray-600 dark:text-gray-300">
      © {new Date().getFullYear()} Vikram Kumar • Built with Next.js & Tailwind
    </footer>
  );
}
