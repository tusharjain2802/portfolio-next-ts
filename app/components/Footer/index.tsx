export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Made with ❤️ by Tushar Jain
        </p>
      </div>
    </footer>
  );
}
