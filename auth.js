(function() {
    const PASS_HASH = '6524bfe7b845f42a453603a89c087b24eb8cb3df013cc31b9ba930ca7f014c38'; // SHA-256 of 'WAG2026'
    const AUTH_KEY = 'wag_dashboard_auth';
    const AUTH_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

    // Check if already authenticated
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
        try {
            const { hash, timestamp } = JSON.parse(stored);
            if (hash === PASS_HASH && Date.now() - timestamp < AUTH_EXPIRY) {
                return; // Already authenticated
            }
        } catch(e) {}
        localStorage.removeItem(AUTH_KEY);
    }

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
        #auth-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: #04060c;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', -apple-system, sans-serif;
        }
        .auth-box {
            text-align: center;
            padding: 48px;
            max-width: 400px;
            width: 90%;
        }
        .auth-logo {
            height: 60px;
            margin-bottom: 24px;
            filter: brightness(0) invert(1) brightness(0.85);
        }
        .auth-box h2 {
            color: #f0f4f8;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
        }
        .auth-box p {
            color: #64748b;
            font-size: 13px;
            margin-bottom: 24px;
        }
        #auth-input {
            width: 100%;
            padding: 12px 16px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            color: #f0f4f8;
            font-size: 15px;
            font-family: inherit;
            outline: none;
            text-align: center;
            letter-spacing: 0.1em;
            margin-bottom: 12px;
        }
        #auth-input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }
        #auth-submit {
            width: 100%;
            padding: 12px;
            background: #3b82f6;
            border: none;
            border-radius: 10px;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            font-family: inherit;
            cursor: pointer;
            transition: background 0.2s;
        }
        #auth-submit:hover { background: #2563eb; }
        #auth-error {
            color: #ef4444;
            font-size: 12px;
            margin-top: 12px;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);

    // Show password overlay
    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <div class="auth-box">
                <img src="wag-logo.jpg" alt="WAG" class="auth-logo">
                <h2>Aftermarket Site Assessment</h2>
                <p>Enter access code to continue</p>
                <input type="password" id="auth-input" placeholder="Access code" autocomplete="off">
                <button id="auth-submit">Enter</button>
                <div id="auth-error" style="display:none">Incorrect access code</div>
            </div>
        `;
        document.body.prepend(overlay);

        // Hide main content
        const allChildren = Array.from(document.body.children);
        allChildren.forEach(el => {
            if (el.id !== 'auth-overlay') {
                el.style.display = 'none';
                el.dataset.wasHidden = 'true';
            }
        });

        async function checkPassword() {
            const input = document.getElementById('auth-input').value;
            const encoder = new TextEncoder();
            const data = encoder.encode(input);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            if (hashHex === PASS_HASH) {
                localStorage.setItem(AUTH_KEY, JSON.stringify({ hash: PASS_HASH, timestamp: Date.now() }));
                overlay.remove();
                allChildren.forEach(el => {
                    if (el.dataset.wasHidden) {
                        el.style.display = '';
                        delete el.dataset.wasHidden;
                    }
                });
            } else {
                document.getElementById('auth-error').style.display = 'block';
                document.getElementById('auth-input').value = '';
                document.getElementById('auth-input').focus();
            }
        }

        document.getElementById('auth-submit').addEventListener('click', checkPassword);
        document.getElementById('auth-input').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') checkPassword();
        });

        // Focus input
        setTimeout(() => document.getElementById('auth-input')?.focus(), 100);
    });
})();
