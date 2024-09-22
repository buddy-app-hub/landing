export default function Custom500() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>500 - Error del servidor</h1>
      </div>
    );
  }
  
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
    },
    title: {
      fontSize: '3rem',
      color: '#333',
    },
  };
  