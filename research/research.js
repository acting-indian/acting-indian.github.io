const audio = new Audio('click.mp3');
audio.loop = false;
audio.load();

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img.research-photo').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            audio.play();
            const src = el.getAttribute('src');
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'radial-gradient(circle at center, #444, black) fixed';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = 9999;

            const img = document.createElement('img');
            img.src = src;
            img.style.maxHeight = '95vh';
            img.style.maxWidth = '95vw';
            img.style.boxShadow = '0 0 10px #000';
            img.style.borderRadius = '8px';
            if (window.innerWidth < 768) {
                img.style.marginBottom = '7rem';
            }

            const closeBtn = document.createElement('span');
            closeBtn.textContent = '✕';
            closeBtn.style.position = 'fixed';
            closeBtn.style.top = '2rem';
            closeBtn.style.right = '2rem';
            closeBtn.style.fontSize = '2rem';
            closeBtn.style.color = '#fff';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.fontWeight = 'bold';
            closeBtn.style.background = 'rgba(0,0,0,0.3)';
            closeBtn.style.borderRadius = '50%';
            closeBtn.style.padding = '0.5rem 1rem';
            closeBtn.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';

            closeBtn.onclick = function () {
                document.body.removeChild(overlay);
            };

            overlay.onclick = function (e) {
                if (e.target === overlay) closeBtn.onclick();
            };

            overlay.appendChild(img);
            overlay.appendChild(closeBtn);
            overlay.style.opacity = '0';
            document.body.appendChild(overlay);

            setTimeout(function () {
                overlay.style.opacity = '1';
            }, 200);

        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('p.research-photo-caption').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const text = el.textContent
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'radial-gradient(circle at center, #444, black) fixed';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = 9999;

            const p = document.createElement('p');
            p.textContent = text;
            p.className = 'research-photo-caption';
            p.style.cursor = 'default';
            p.style.fontSize = '1.4rem';
            p.style.lineHeight = '2.2rem';
            if (window.innerWidth < 768) {
                p.style.marginBottom = '7rem';
            }

            const closeBtn = document.createElement('span');
            closeBtn.textContent = '✕';
            closeBtn.style.position = 'fixed';
            closeBtn.style.top = '2rem';
            closeBtn.style.right = '2rem';
            closeBtn.style.fontSize = '2rem';
            closeBtn.style.color = '#fff';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.fontWeight = 'bold';
            closeBtn.style.background = 'rgba(0,0,0,0.3)';
            closeBtn.style.borderRadius = '50%';
            closeBtn.style.padding = '0.5rem 1rem';
            closeBtn.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';

            closeBtn.onclick = function () {
                document.body.removeChild(overlay);
            };

            overlay.onclick = function (e) {
                if (e.target === overlay) closeBtn.onclick();
            };

            overlay.appendChild(p);
            overlay.appendChild(closeBtn);
            overlay.style.opacity = '0';
            document.body.appendChild(overlay);

            setTimeout(function () {
                overlay.style.opacity = '1';
            }, 200);

        });
    });
});

setTimeout(function () {
    const caption = document.querySelector('p.research-photo-caption');
    if (caption) {
        caption.click();
    }
}, 2000);
