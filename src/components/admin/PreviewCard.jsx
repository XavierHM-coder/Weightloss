import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

const PreviewCard = ({ data }) => {
  const { title, description, url, image, platform } = data;

  const renderIcon = () => {
    switch (platform) {
      case 'facebook': return <Facebook size={16} />;
      case 'instagram': return <Instagram size={16} />;
      case 'twitter': return <Twitter size={16} />;
      case 'youtube': return <Youtube size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  const defaultImage = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="preview-post-card">
      <img 
        src={image || defaultImage} 
        alt={title || "Preview"} 
        onError={(e) => { e.target.src = defaultImage }}
      />
      <div className="content">
        <div className="platform-badge">
          {renderIcon()}
          <span>{platform === 'generic' ? 'Enlace Externo' : platform.toUpperCase()}</span>
        </div>
        <h3>{title || "Título del Post"}</h3>
        <p>{description || "Descripción del contenido que aparecerá en la página principal..."}</p>
        <a href={url || "#"} className="btn-link" target="_blank" rel="noopener noreferrer">
          Ver {platform === 'generic' ? 'Enlace' : platform.charAt(0).toUpperCase() + platform.slice(1)}
        </a>
      </div>
    </div>
  );
};

export default PreviewCard;
