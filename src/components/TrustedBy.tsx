
const TrustedBy = () => {
  const brands = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateX', logo: 'IX' },
    { name: 'GrowthCo', logo: 'GC' },
    { name: 'ScaleUp', logo: 'SU' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'FutureTech', logo: 'FT' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-lg font-medium">Trusted by 10,000+ businesses worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center group">
              <div className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <span className="font-bold text-gray-600 group-hover:text-purple-600 transition-colors">
                    {brand.logo}
                  </span>
                </div>
                <span className="font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
