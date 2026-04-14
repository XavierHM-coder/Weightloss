import React, { useEffect } from 'react';

const FormSocialPost = ({ formData, setFormData, onSubmit, loading, isEditing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Detect platform automatically
  useEffect(() => {
    const { url } = formData;
    let platform = 'generic';

    if (url.includes('facebook')) platform = 'facebook';
    else if (url.includes('instagram')) platform = 'instagram';
    else if (url.includes('tiktok')) platform = 'tiktok';
    else if (url.includes('twitter')) platform = 'twitter';
    else if (url.includes('youtube')) platform = 'youtube';

    setFormData(prev => ({ ...prev, platform }));
  }, [formData.url]);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Título de la publicación</label>
        <input
          type="text"
          name="title"
          className="form-input"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Ej: ¡Nuevo tip de nutrición!"
        />
      </div>

      <div className="form-group">
        <label>Descripción</label>
        <textarea
          name="description"
          className="form-input"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Escribe un breve resumen de lo que trata el post..."
          style={{ resize: 'vertical' }}
        />
      </div>

      <div className="form-group">
        <label>URL del Post Externo</label>
        <input
          type="url"
          name="url"
          className="form-input"
          value={formData.url}
          onChange={handleChange}
          required
          placeholder="https://www.instagram.com/p/..."
        />
      </div>

      <div className="form-group">
        <label>Imagen del Post (Sube una local o usa una URL)</label>

        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <input
            type="file"
            accept="image/*"
            className="form-input"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData(prev => ({ ...prev, image: reader.result }));
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748B' }}>O ingresa una URL:</div>

          <input
            type="url"
            name="image"
            className="form-input"
            value={formData.image.startsWith('data:') ? '' : formData.image}
            onChange={handleChange}
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.4rem' }}>
          {formData.image.startsWith('data:') ? '✅ Imagen local seleccionada' : 'Si dejas vacío se usará una imagen por defecto.'}
        </p>
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? <div className="loader"></div> : (isEditing ? 'Actualizar Publicación' : 'Publicar en WordPress')}
      </button>
    </form>
  );
};

export default FormSocialPost;
