import React, { useState, useEffect } from 'react';
import FormSocialPost from './FormSocialPost';
import PreviewCard from './PreviewCard';
import { Edit2, Trash2, Plus } from 'lucide-react';

const Dashboard = ({ user }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    image: '',
    platform: 'generic'
  });

  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Load posts on mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    const existingPostsRaw = localStorage.getItem('social_posts');
    const existingPosts = existingPostsRaw ? JSON.parse(existingPostsRaw) : [];
    setPosts(existingPosts);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // --- DEMO MODE: Writing to LocalStorage ---
    setTimeout(() => {
      try {
        const existingPostsRaw = localStorage.getItem('social_posts');
        let existingPosts = existingPostsRaw ? JSON.parse(existingPostsRaw) : [];

        if (editingId) {
          // UPDATE MODE
          existingPosts = existingPosts.map(post =>
            post.id === editingId
              ? { ...formData, id: editingId }
              : post
          );
          setMessage({ type: 'success', text: '¡Publicación actualizada con éxito!' });
        } else {
          // CREATE MODE
          const newPost = {
            id: Date.now(),
            ...formData
          };
          existingPosts = [newPost, ...existingPosts];
          setMessage({ type: 'success', text: '¡Publicación creada con éxito!' });
        }

        localStorage.setItem('social_posts', JSON.stringify(existingPosts));
        setPosts(existingPosts);
        resetForm();
      } catch (err) {
        setMessage({ type: 'error', text: 'Error al procesar la solicitud.' });
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      description: post.description,
      url: post.url,
      image: post.image,
      platform: post.platform
    });
    setEditingId(post.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      localStorage.setItem('social_posts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
      setMessage({ type: 'success', text: 'Publicación eliminada.' });

      if (editingId === id) resetForm();
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', url: '', image: '', platform: 'generic' });
    setEditingId(null);
  };

  return (
    <div className="dashboard-grid">
      <div className="section-title">
        <h2>{editingId ? 'Editar Publicación' : 'Crear Nueva Publicación'}</h2>
        <span style={{
          backgroundColor: '#ffc107',
          color: '#000',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          marginLeft: '10px'
        }}>Wess </span>
      </div>

      {message.text && (
        <div className={`alert alert-${message.type}`} style={{
          padding: '1rem',
          backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
          color: message.type === 'success' ? '#155724' : '#721c24',
          borderRadius: '8px',
          marginBottom: '1rem',
          gridColumn: '1 / -1',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>{message.text}</span>
          <button onClick={() => setMessage({ type: '', text: '' })} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
        </div>
      )}

      <div className="dashboard">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0 }}>{editingId ? 'Editando Post' : 'Detalles del Post'}</h3>
            {editingId && (
              <button onClick={resetForm} className="btn-text" style={{ color: 'var(--primary)', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}>
                <Plus size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                Crear Nuevo
              </button>
            )}
          </div>
          <FormSocialPost
            formData={formData}
            setFormData={setFormData}
            onSubmit={handlePublish}
            loading={loading}
            isEditing={!!editingId}
          />
        </div>

        <div className="card-preview-section">
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Vista Previa en Vivo</h3>
          <PreviewCard data={formData} />
        </div>
      </div>

      <div className="posts-management" style={{ marginTop: '4rem' }}>
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ margin: 0 }}>Gestionar Publicaciones Existentes</h2>
          <span className="badge">{posts.length} Posts</span>
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', background: '#fff', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
            <p style={{ color: '#64748b' }}>No hay publicaciones guardadas todavía.</p>
          </div>
        ) : (
          <div className="posts-list-grid">
            {posts.map(post => (
              <div key={post.id} className="post-admin-card">
                <div className="post-admin-img">
                  <img src={post.image || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'} alt="" />
                </div>
                <div className="post-admin-info">
                  <h4>{post.title}</h4>
                  <p>{post.platform.toUpperCase()}</p>
                </div>
                <div className="post-admin-actions">
                  <button onClick={() => handleEdit(post)} className="action-btn edit" title="Editar">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="action-btn delete" title="Eliminar">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
