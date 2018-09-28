import { CarbonLDP } from 'carbonldp';
interface Post {
    title: string;
    content: string;
    publishDate: Date;
    tags: Tags[];
}

interface Tags {
    name: string;
}

const carbonldp = new CarbonLDP("https://localhost:8080");

function renderPost(post: Post): void {
    const container = document.querySelector("#posts");

    let tagsHtml: string;
    if (post.tags) {
        tagsHtml = '<div class="tags">';
        post.tags.forEach(tag => {
            tagsHtml += `<label class="tags">${tag.name}</label>`;
        });
        tagsHtml += '</div>';
    }

    container.innerHTML += `
        <div class="post">
            <h2 class="title">${post.title}</h2>
            <div class="subTitle">
                <label class="publishDate">${post.publishDate}</label>
            </div>
            <p>
                <label class="content">${post.content}</label>
            </p>
            ${tagsHtml}
        </div>
        `;
}