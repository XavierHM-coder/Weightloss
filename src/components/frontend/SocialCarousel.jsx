import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

const SocialCarousel = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchPosts = async () => {
            // --- DEMO MODE: Reading from LocalStorage instead of API ---
            setTimeout(() => {
                const localData = localStorage.getItem('social_posts');
                
                if (localData) {
                    const parsed = JSON.parse(localData);
                    setPosts(parsed);
                } else {
                    // Fallback to initial mock data
                    const mockData = [
                        { id: 1, title: 'Special 3-for-2 Offer', description: 'Active Promotion! Hire a 2-month customized plan and get the 3rd one free. Take the step today.', url: 'https://instagram.com/weightlosspronutrition', platform: 'instagram', image: 'src/img/productos.jpg' },
                        { id: 2, title: 'Nutri-Tips: Healthy Fats', description: 'Avocados and almonds don\'t just give you energy; they also improve your skin and cardiovascular health.', url: 'https://instagram.com/weightlosspronutrition', platform: 'instagram', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999' },
                        { id: 3, title: 'Holistic Health: Resting', description: 'Remember that the body also nourishes itself while you sleep. Adequate rest prevents metabolic stress.', url: 'https://facebook.com/WeightlossProfessionalNutrition', platform: 'facebook', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b' },
                        { id: 4, title: 'Daily Motivation', description: 'Your holistic well-being is not built in a single day, but it can start today with one good decision.', url: 'https://facebook.com/WeightlossProfessionalNutrition', platform: 'facebook', image: 'src/img/eat2.jpg' }
                    ];
                    setPosts(mockData);
                }
                setLoading(false);
            }, 600);
        };

        fetchPosts();

        // Optional: listen to storage changes in the same window (to sync immediately if multiple tabs)
        const handleStorageChange = () => {
            const updatedData = localStorage.getItem('social_posts');
            if (updatedData) setPosts(JSON.parse(updatedData));
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const scrollAmount = clientWidth * 0.8;
            carouselRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const renderIcon = (platform) => {
        switch (platform) {
            case 'facebook': return <Facebook size={18} />;
            case 'instagram': return <Instagram size={18} />;
            case 'twitter': return <Twitter size={18} />;
            case 'youtube': return <Youtube size={18} />;
            default: return <ExternalLink size={18} />;
        }
    };

    if (loading) return <div className="text-center p-5">Loading feeds...</div>;

    return (
        <div className="social-carousel-container">
            <div className="social-carousel-nav">
                <button onClick={() => scroll('left')} className="nav-btn"><ChevronLeft /></button>
                <button onClick={() => scroll('right')} className="nav-btn"><ChevronRight /></button>
            </div>

            <div className="social-carousel" ref={carouselRef}>
                {posts.map(post => (
                    <div className="social-card" key={post.id}>
                        <img 
                            src={post.image || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'} 
                            alt={post.title} 
                        />
                        <div className="social-card-overlay">
                            <div className="platform-icon">{renderIcon(post.platform)}</div>
                            <div className="card-info">
                                <h3>{post.title}</h3>
                                <p>{post.description.substring(0, 80)}...</p>
                                <a href={post.url} target="_blank" rel="noopener noreferrer" className="card-link">
                                    View on {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialCarousel;
