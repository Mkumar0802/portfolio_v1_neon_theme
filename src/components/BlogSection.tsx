import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";
import { posts } from "@/data/blogPosts";

const BlogSection = () => {

    return (
        <section id="blog" className="py-20 px-6 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-black neon-text-pink mb-4">
                        LATEST INSIGHTS
                    </h2>
                    <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
                    <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights on modern web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={post.id}
                            className={`group relative bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/60 transition-all duration-300 fade-in-up delay-${(index + 1) * 200}`}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 text-xs font-bold bg-background/80 backdrop-blur-sm border border-secondary text-secondary rounded-full flex items-center gap-2">
                                        <FaTag size={10} />
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-mono">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt /> {post.date}
                                    </span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <a
                                    href={post.link}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors duration-300"
                                >
                                    READ ARTICLE <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="neon-button">
                        VIEW ALL POSTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
