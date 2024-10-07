document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado");

    const videos = document.querySelectorAll('.video'); // Seleciona todos os vídeos
    let currentVideo = 0;
    const videoDuration = 5000; // Duração de cada vídeo em milissegundos (5 segundos)

    function showVideo(index) {
        console.log(`Mostrando vídeo: ${index}`);
        videos.forEach((video, i) => {
            if (i === index) {
                video.classList.add('active'); // Adiciona a classe 'active' ao vídeo atual
                video.play(); // Reproduz o vídeo atual
            } else {
                video.classList.remove('active'); // Remove a classe 'active' dos vídeos não ativos
                video.pause(); // Pausa os vídeos não ativos
            }
        });
    }

    function nextVideo() {
        currentVideo = (currentVideo + 1) % videos.length; // Move para o próximo vídeo
        showVideo(currentVideo); // Atualiza o vídeo
    }

    // Mostra o primeiro vídeo ao carregar a página
    showVideo(currentVideo);

    // Configura a transição automática entre vídeos
    setInterval(nextVideo, videoDuration); // Chama a função nextVideo a cada 5 segundos
});
