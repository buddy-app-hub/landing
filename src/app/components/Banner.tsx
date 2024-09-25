import Image from 'next/image';

import BuddyLogo from '@/assets/concept-banner.jpg';

export default function Banner() {
    return (
        <section style={styles.section}>
            <div style={styles.imageContainer}>
                <Image
                    src={BuddyLogo}
                    alt="Foto de fondo"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
        </section>
    );
}

// Estilos en JS
const styles = {
    section: {
        position: 'relative',
        height: '650px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Texto en blanco
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // La imagen está detrás del texto
    },
};
