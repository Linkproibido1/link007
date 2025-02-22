export const Banner: React.FC<BannerProps> = ({ code, className = '' }) => {
  if (!code) {
    return (
      <div className={`glass-effect rounded-xl overflow-hidden ${className}`}>
        <p>Nenhum banner disponível.</p>
      </div>
    );
  }

  return (
    <div 
      className={`glass-effect rounded-xl overflow-hidden ${className}`}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
