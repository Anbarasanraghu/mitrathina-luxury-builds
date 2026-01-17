import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import projectInterior from "@/assets/project-interior.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const categories = ["All", "Construction", "Interior Design", "Architecture", "Tips"];

const posts = [
  {
    id: 1,
    title: "10 Trends Shaping Malaysian Interior Design in 2024",
    excerpt: "Discover the latest interior design trends that are transforming Malaysian homes and offices this year.",
    category: "Interior Design",
    date: "January 10, 2024",
    readTime: "5 min read",
    image: projectInterior,
  },
  {
    id: 2,
    title: "Sustainable Construction: Building a Greener Malaysia",
    excerpt: "How eco-friendly construction practices are becoming the norm in Malaysian development projects.",
    category: "Construction",
    date: "January 5, 2024",
    readTime: "7 min read",
    image: projectResidential,
  },
  {
    id: 3,
    title: "The Rise of Smart Homes in Malaysia",
    excerpt: "Exploring how technology integration is revolutionizing residential construction in Malaysia.",
    category: "Architecture",
    date: "December 28, 2023",
    readTime: "6 min read",
    image: projectCommercial,
  },
  {
    id: 4,
    title: "Renovation Tips: Maximizing Small Spaces",
    excerpt: "Practical advice for homeowners looking to make the most of limited square footage.",
    category: "Tips",
    date: "December 20, 2023",
    readTime: "4 min read",
    image: projectInterior,
  },
  {
    id: 5,
    title: "Commercial Construction: What to Expect in 2024",
    excerpt: "Industry insights on the commercial construction landscape and upcoming projects.",
    category: "Construction",
    date: "December 15, 2023",
    readTime: "8 min read",
    image: projectCommercial,
  },
  {
    id: 6,
    title: "Choosing the Right Materials for Your Home",
    excerpt: "A comprehensive guide to selecting quality materials that stand the test of time.",
    category: "Tips",
    date: "December 10, 2023",
    readTime: "5 min read",
    image: projectResidential,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-light opacity-80" />
          <div className="luxury-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Blog & Insights
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Latest News &
                <br />
                <span className="text-primary">Industry Insights</span>
              </h1>
              <p className="text-white/70 text-lg">
                Stay updated with the latest trends, tips, and news from the construction 
                and interior design industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container">
            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-charcoal"
                      : "bg-white text-slate hover:bg-charcoal hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-charcoal text-xs font-medium rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-slate-light text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-light text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
              >
                Stay Updated
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 mb-8"
              >
                Subscribe to our newsletter for the latest industry insights and company updates.
              </motion.p>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
                />
                <Button variant="gold">Subscribe</Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
