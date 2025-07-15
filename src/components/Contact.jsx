import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Let's Work Together
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      tarunkushwaha39596972@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 6265383846</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Sagar, Madhya Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/tarun-kushwaha-kushwaha-697a01344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-purple-100 p-3 rounded-lg transition-colors duration-200"
                  >
                    <Linkedin
                      className="text-gray-600 hover:text-purple-600"
                      size={24}
                    />
                  </a>
                  <a
                    href="https://github.com/Tarun-3959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-purple-100 p-3 rounded-lg transition-colors duration-200"
                  >
                    <Github
                      className="text-gray-600 hover:text-purple-600"
                      size={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
