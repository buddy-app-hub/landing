export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Buddy</h1>
        <p style={styles.subtitle}>próximamente...</p>
      </div>
    )
  }
  
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: 0,
    },
    title: {
      fontSize: '5rem',
      color: 'white',
      marginBottom: '20px',
      textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
    },
    subtitle: {
      fontSize: '2rem',
      color: 'white',
      textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
    },
  }
  