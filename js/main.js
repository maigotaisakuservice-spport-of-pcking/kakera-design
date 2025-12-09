document.addEventListener('DOMContentLoaded', () => {
    // ニュースページの処理
    if (document.getElementById('news-container')) {
        fetch('js/news.json')
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.getElementById('news-container');
                data.forEach(item => {
                    const article = document.createElement('article');
                    const date = document.createElement('p');
                    const title = document.createElement('h2');
                    const content = document.createElement('p');

                    date.textContent = item.date;
                    title.textContent = item.title;
                    content.textContent = item.content;

                    article.appendChild(date);
                    article.appendChild(title);
                    article.appendChild(content);
                    newsContainer.appendChild(article);
                });
            })
            .catch(error => console.error('Error fetching news:', error));
    }

    // システム稼働状況ページの処理
    if (document.getElementById('status-container')) {
        fetch('js/status.json')
            .then(response => response.json())
            .then(data => {
                const statusContainer = document.getElementById('status-container');
                data.forEach(item => {
                    const serviceDiv = document.createElement('div');
                    const serviceName = document.createElement('h2');
                    const statusMessage = document.createElement('p');

                    serviceName.textContent = item.serviceName;
                    statusMessage.textContent = item.message;

                    // ステータスに応じてクラスを付与（CSSで色分けなどに使用）
                    serviceDiv.classList.add('service-status', `status-${item.status}`);

                    serviceDiv.appendChild(serviceName);
                    serviceDiv.appendChild(statusMessage);
                    statusContainer.appendChild(serviceDiv);
                });
            })
            .catch(error => console.error('Error fetching status:', error));
    }
});
