export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Designed and Built with ❤️ using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
