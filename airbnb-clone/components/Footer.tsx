const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 pb-24 pt-8 md:pb-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Inspiration for future getaways
          </h2>
          <div className="mt-4 flex gap-4 overflow-x-auto text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Popular</span>
            <span>Arts & culture</span>
            <span>Beach</span>
            <span>Mountain</span>
            <span>Cabins</span>
          </div>
        </section>

        <div className="grid gap-6 text-sm text-gray-600 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gray-900">Support</h3>
            <p>Help Center</p>
            <p>Cancellation options</p>
            <p>Safety information</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Hosting</h3>
            <p>Airbnb your home</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Airbnb</h3>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Investors</p>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          © 2026 Airbnb Clone. Built for a front-end class project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;