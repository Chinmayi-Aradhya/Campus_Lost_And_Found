// Service Worker Registration (Replace the existing SW code in your HTML)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New update available
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'SYNC_COMPLETE') {
            showNotification('✅ Sync Complete', 'Your offline data has been synced successfully!');
        }
    });
}

// Show update notification
function showUpdateNotification() {
    const updateBanner = document.createElement('div');
    updateBanner.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 15px;
            text-align: center;
            z-index: 1000;
            font-weight: 500;
        ">
            🚀 A new version is available! 
            <button onclick="updateApp()" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                padding: 5px 15px;
                border-radius: 5px;
                margin-left: 10px;
                cursor: pointer;
            ">Update Now</button>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none;
                border: none;
                color: white;
                padding: 5px 10px;
                margin-left: 10px;
                cursor: pointer;
                opacity: 0.7;
            ">✕</button>
        </div>
    `;
    document.body.appendChild(updateBanner);
}

// Update app
function updateApp() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
            }
        });
    }
}