const seoData = {
    title: "Login Page - Your Company",
    description: "Enter your credentials to access the platform.",
    keywords: "login, authentication, access, security",
    author: "Your Company"
};

function loadSEO() {
    document.title = seoData.title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.name = 'description';
        document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = seoData.description;

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.content = seoData.keywords;

    let authorMeta = document.querySelector('meta[name="author"]');
    if (!authorMeta) {
        authorMeta = document.createElement('meta');
        authorMeta.name = 'author';
        document.head.appendChild(authorMeta);
    }
    authorMeta.content = seoData.author;
}

loadSEO();
