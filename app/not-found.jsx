const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
                <p className="text-2xl font-medium text-gray-600 mt-4">Pagina no encontrada</p>
                <p className="text-gray-500 mt-2">Lo sentimos, pero esta paina no existe.</p>
                <a href="/" className="mt-6 inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-md shadow-md hover:bg-primary transition duration-300">
                    Volver al inicio
                </a>
            </div>
        </div>
    );
};

export default NotFound;