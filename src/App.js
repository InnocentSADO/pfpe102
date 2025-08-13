jsx
import React, { useState, useEffect } from "react";
import { 
  Camera, 
  Users, 
  Star, 
  Heart, 
  MessageCircle, 
  Award,
  Building,
  GraduationCap,
  MapPin,
  Calendar
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 8);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Marie Dubois", text: "Cette formation a complètement transformé ma carrière. Les compétences acquises sont directement applicables sur le terrain." },
    { name: "Jean Tremblay", text: "L'équipe pédagogique était exceptionnelle. Le soutien continu pendant et après la formation a fait toute la différence." },
    { name: "Sophie Lefebvre", text: "Un programme complet qui m'a ouvert de nouvelles portes professionnelles. Je recommande vivement cette expérience." },
    { name: "Pierre Martin", text: "La combinaison parfaite entre théorie et pratique. Les sorties terrain étaient particulièrement enrichissantes." },
    { name: "Claudia Gagnon", text: "Un environnement d'apprentissage stimulant et bienveillant. J'ai beaucoup appris de mes collègues autant que des formateurs." },
    { name: "Marc Boucher", text: "Les compétences techniques acquises m'ont permis d'obtenir un poste dans mon domaine de rêve." },
    { name: "Isabelle Roy", text: "Une expérience de formation exceptionnelle qui a dépassé toutes mes attentes. Merci à toute l'équipe!" },
    { name: "Daniel Côté", text: "Le programme était bien structuré et les formateurs étaient passionnés par ce qu'ils enseignaient." },
    { name: "Nathalie Pelletier", text: "J'ai apprécié l'approche pratique et les nombreuses opportunités de mettre en application mes connaissances." },
    { name: "François Lavoie", text: "Un tremplin professionnel incroyable. Les liens établis pendant la formation sont toujours précieux aujourd'hui." },
    { name: "Caroline Bergeron", text: "L'équilibre entre théorie, pratique et développement personnel était parfait. Une formation complète." },
    { name: "Simon Morin", text: "Les sorties terrain étaient des moments inoubliables où j'ai pu appliquer mes compétences dans des situations réelles." },
    { name: "Annie Leblanc", text: "Un programme qui a réellement changé ma vie professionnelle. Je me sens maintenant pleinement qualifiée." },
    { name: "Patrick Gauthier", text: "La qualité de l'enseignement était exceptionnelle. Chaque module était bien pensé et pertinent." },
    { name: "Julie Mercier", text: "Un environnement d'apprentissage collaboratif et stimulant. J'ai beaucoup appris de mes pairs." },
    { name: "Michel Caron", text: "Les compétences acquises m'ont permis de prendre un nouveau départ professionnel avec confiance." },
    { name: "Stéphanie Fortin", text: "Une formation qui allie excellence académique et préparation pratique au marché du travail." },
    { name: "Alain Dubuc", text: "L'accompagnement personnalisé a fait toute la différence dans mon parcours de formation." },
    { name: "Linda Tremblay", text: "Une expérience formatrice et humainement enrichissante. Je suis reconnaissante pour cette opportunité." }
  ];

  const sponsors = [
    { name: "Service Québec", logo: "SQ", color: "bg-blue-600" },
    { name: "CSSPO", logo: "C", color: "bg-green-600" },
    { name: "Employeurs partenaires", logo: "E", color: "bg-purple-600" },
    { name: "SITO", logo: "S", color: "bg-red-600" }
  ];

  const galleryImages = [
    { src: "https://placehold.co/400x300/4f46e5/ffffff?text=Formation+1", title: "Séance de formation pratique" },
    { src: "https://placehold.co/400x300/7c3aed/ffffff?text=Formation+2", title: "Travail en équipe" },
    { src: "https://placehold.co/400x300/059669/ffffff?text=Sortie+1", title: "Sortie terrain - Gatineau" },
    { src: "https://placehold.co/400x300/dc2626/ffffff?text=Sortie+2", title: "Équipe en action" },
    { src: "https://placehold.co/400x300/ea580c/ffffff?text=Formation+3", title: "Atelier pratique" },
    { src: "https://placehold.co/400x300/16a34a/ffffff?text=Sortie+3", title: "Exploration sur le terrain" },
    { src: "https://placehold.co/400x300/9333ea/ffffff?text=Formation+4", title: "Présentation de groupe" },
    { src: "https://placehold.co/400x300/0891b2/ffffff?text=Sortie+4", title: "Moment de partage" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isLoaded ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">Groupe 102 SITO</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'testimonials', 'gallery', 'sponsors'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-indigo-600 border-b-2 border-indigo-600' 
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {section === 'home' ? 'Accueil' : 
                   section === 'testimonials' ? 'Témoignages' :
                   section === 'gallery' ? 'Galerie' : 'Partenaires'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8">
              <Award className="h-20 w-20 mx-auto text-yellow-300 mb-4 animate-bounce" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Groupe 102 SITO
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Célébration de la réussite de la formation et de la sortie PFPE
            </p>
            <p className="text-lg mb-12 text-gray-200">
              Gatineau, Québec • 2024
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-5 w-5" />
                <span>Gatineau, Québec</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-5 w-5" />
                <span>Événement 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-5 w-5" />
                <span>19 participants</span>
              </div>
            </div>
          </div>

          {/* Hero Image Gallery */}
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-96 object-cover transition-opacity duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-center font-medium">{galleryImages[currentImageIndex].title}</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="h-10 w-10 text-indigo-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Témoignages</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos 19 participants ont à dire sur leur expérience de formation exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-4 flex justify-end">
                  <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-10 w-10 text-indigo-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Galerie Photos</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moments inoubliables de la formation et de la sortie PFPE à Gatineau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-6 font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Plus de 50 photos capturant les moments clés de notre parcours de formation
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-10 w-10 text-yellow-400 mr-3" />
              <h2 className="text-4xl font-bold">Remerciements</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre profonde gratitude aux partenaires qui ont rendu cette formation possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl ${sponsor.color} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-6xl font-bold mb-4">{sponsor.logo}</div>
                <h3 className="text-xl font-bold">{sponsor.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Un immense merci à tous nos partenaires pour leur soutien indéfectible, 
                leur engagement envers la formation professionnelle et leur contribution 
                à la réussite de nos 19 participants. Votre confiance et votre investissement 
                dans le développement des compétences de demain font toute la différence.
              </p>
              <div className="flex justify-center space-x-8 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-indigo-400 mr-2" />
              <span className="text-xl font-bold">Groupe 102 SITO</span>
            </div>
            <p className="text-gray-400 mb-4">
              Formation et sortie PFPE • Gatineau, Québec • 2024
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Tous droits réservés. Célébration de la réussite du groupe 102.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

