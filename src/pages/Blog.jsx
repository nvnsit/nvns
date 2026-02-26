import React, { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tech', name: 'Technology' },
    { id: 'career', name: 'Career Tips' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'industry', name: 'Industry News' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Programming Languages to Learn in 2026',
      excerpt: 'Discover the most in-demand programming languages that will shape the tech industry in 2026 and beyond.',
      author: 'Tech Expert',
      date: '2024-12-20',
      category: 'tech',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      tags: ['Programming', 'Career', 'Technology']
    },
    {
      id: 2,
      title: 'How to Prepare for Your First Tech Interview',
      excerpt: 'Essential tips and strategies to ace your technical interviews and land your dream job in the tech industry.',
      author: 'Career Coach',
      date: '2024-12-18',
      category: 'career',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
      tags: ['Interview', 'Career', 'Tips']
    },
    {
      id: 3,
      title: 'Getting Started with Full Stack Development',
      excerpt: 'A comprehensive guide for beginners who want to start their journey in full stack web development.',
      author: 'Senior Developer',
      date: '2024-12-15',
      category: 'tutorials',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      tags: ['Full Stack', 'Web Development', 'Tutorial']
    },
    {
      id: 4,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.',
      author: 'AI Researcher',
      date: '2024-12-12',
      category: 'industry',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      tags: ['AI', 'Future', 'Technology']
    },
    {
      id: 5,
      title: 'Data Science Career Path: A Complete Guide',
      excerpt: 'Everything you need to know about building a successful career in data science, from skills to job opportunities.',
      author: 'Data Scientist',
      date: '2024-12-10',
      category: 'career',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Data Science', 'Career', 'Guide']
    },
    {
      id: 6,
      title: 'DevOps Best Practices for Modern Teams',
      excerpt: 'Learn the essential DevOps practices that help teams deliver software faster and more reliably.',
      author: 'DevOps Engineer',
      date: '2024-12-08',
      category: 'tech',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      tags: ['DevOps', 'Best Practices', 'CI/CD']
    },
    {
      id: 7,
      title: 'Building Your First React Application',
      excerpt: 'Step-by-step tutorial on creating your first React application from scratch with modern best practices.',
      author: 'Frontend Developer',
      date: '2024-12-05',
      category: 'tutorials',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      tags: ['React', 'Tutorial', 'JavaScript']
    },
    {
      id: 8,
      title: 'Cybersecurity Trends to Watch in 2026',
      excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and threats shaping the digital landscape.',
      author: 'Security Expert',
      date: '2024-12-03',
      category: 'industry',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
      tags: ['Cybersecurity', 'Trends', 'Security']
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Stay updated with the latest trends, tutorials, and insights from the tech industry
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="section-padding bg-white -mt-16 relative z-10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card card-hover group">
                <div className="overflow-hidden rounded-t-2xl">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                    <Tag className="h-16 w-16 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-100 mb-8">
              Get the latest articles, tutorials, and industry insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Blog

