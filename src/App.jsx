/* ============================================
   SAID AI — Global Styles
   ============================================ */

:root {
  --bg: #0a0e1a;
  --bg-2: #0f1524;
  --card: #131a2b;
  --card-2: #1a2235;
  --border: #232d45;
  --border-light: #2d3a56;

  --cyan: #06b6d4;
  --cyan-light: #22d3ee;
  --cyan-dark: #0891b2;
  --cyan-glow: rgba(6, 182, 212, 0.15);

  --text: #e2e8f0;
  --text-strong: #f8fafc;
  --muted: #94a3b8;
  --muted-2: #64748b;

  --success: #10b981;
  --warn: #f59e0b;
  --warn-bg: rgba(245, 158, 11, 0.08);
  --warn-border: rgba(245, 158, 11, 0.3);
  --error: #ef4444;
  --error-bg: rgba(239, 68, 68, 0.08);
  --error-border: rgba(239, 68, 68, 0.3);

  --radius: 14px;
  --radius-sm: 10px;
  --radius-lg: 20px;

  --shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 24px rgba(6, 182, 212, 0.2);

  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Cairo', 'Tajawal',
          'Noto Sans Arabic', Roboto, Oxygen, Ubuntu, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;
}

body {
  background:
    radial-gradient(ellipse at top, rgba(6, 182, 212, 0.06), transparent 60%),
    radial-gradient(ellipse at bottom, rgba(6, 182, 212, 0.03), transparent 60%),
    var(--bg);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

input, textarea, select {
  font-family: inherit;
  color: inherit;
}

a {
  color: var(--cyan-light);
  text-decoration: none;
}

.hidden {
  display: none !important;
}

/* ============================================
   Layout Shell
   ============================================ */

.app-shell {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  max-width: 100%;
  margin: 0 auto;
  background: var(--bg);
}

.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ============================================
   Header
   ============================================ */

.header {
  flex-shrink: 0;
  background: linear-gradient(180deg, var(--bg-2) 0%, rgba(15, 21, 36, 0.95) 100%);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 0 0;
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 20;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
}

.brand-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: 0.3px;
}

.badge-pro {
  font-size: 0.6rem;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--cyan), var(--cyan-dark));
  color: #fff;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-glow);
}

.brand-owner {
  font-size: 0.7rem;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
}

.actions-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background: var(--card-2);
  border-color: var(--border-light);
  color: var(--cyan-light);
}

.icon-btn:active {
  transform: scale(0.95);
}

.icon-btn.cyan-text {
  color: var(--cyan-light);
  font-weight: 700;
  font-size: 0.8rem;
}

/* ============================================
   Tabs
   ============================================ */

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
  padding-bottom: 0.75rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-sm);
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: var(--text);
  border-color: var(--border-light);
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05));
  border-color: var(--cyan);
  color: var(--cyan-light);
  box-shadow: var(--shadow-glow);
}

/* ============================================
   Main Area
   ============================================ */

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.scroll-area {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}

.scroll-area::-webkit-scrollbar {
  width: 6px;
}

.scroll-area::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-area::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}

.scroll-area::-webkit-scrollbar-thumb:hover {
  background: var(--border-light);
}

/* ============================================
   Welcome Box
   ============================================ */

.welcome-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  max-width: 640px;
  margin: 0 auto;
}

.welcome-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05));
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: var(--cyan-light);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-glow);
}

.welcome-box h1 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-strong);
  margin-bottom: 0.25rem;
}

.welcome-box .tagline {
  font-size: 0.85rem;
  color: var(--cyan-light);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.welcome-box .subtitle {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.6rem;
  width: 100%;
}

.quick-btn {
  padding: 0.75rem 0.9rem;
  border-radius: var(--radius-sm);
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.82rem;
  text-align: start;
  transition: all 0.2s ease;
  line-height: 1.4;
}

.quick-btn:hover {
  background: var(--card-2);
  border-color: var(--cyan);
  color: var(--cyan-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-glow);
}

/* ============================================
   Messages
   ============================================ */

.msg-row {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  animation: fadeIn 0.3s ease;
}

.msg-row.user {
  flex-direction: row-reverse;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.avatar {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--muted);
}

.msg-row.model .avatar {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05));
  border-color: rgba(6, 182, 212, 0.3);
  color: var(--cyan-light);
}

.msg-row.user .avatar {
  background: var(--card-2);
  border-color: var(--border-light);
  color: var(--text);
}

.bubble {
  max-width: min(85%, 640px);
  padding: 0.75rem 0.95rem;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text);
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

.msg-row.user .bubble {
  background: linear-gradient(135deg, var(--cyan-dark), var(--cyan));
  border-color: transparent;
  color: #fff;
}

.msg-img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  margin-bottom: 0.5rem;
  display: block;
}

/* ============================================
   Sources
   ============================================ */

.sources-box {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sources-title {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cyan-light);
  margin-bottom: 0.2rem;
}

.source-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  background: var(--bg-2);
  border: 1px solid var(--border);
  font-size: 0.78rem;
  color: var(--text);
  transition: all 0.2s ease;
}

.source-link:hover {
  border-color: var(--cyan);
  color: var(--cyan-light);
  background: var(--card-2);
}

.source-link span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ============================================
   Message Footer (Speak button)
   ============================================ */

.msg-footer {
  margin-top: 0.6rem;
  padding-top: 0.6rem;
  border-top: 1px solid var(--border);
}

.speak-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  background: var(--bg-2);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.speak-btn:hover {
  color: var(--cyan-light);
  border-color: var(--cyan);
}

/* ============================================
   Banners
   ============================================ */

.banner {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.7rem 0.85rem;
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  line-height: 1.5;
}

.banner.warn {
  background: var(--warn-bg);
  border: 1px solid var(--warn-border);
  color: #fcd34d;
}

.banner.error {
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  color: #fca5a5;
}

/* ============================================
   Form Fields
   ============================================ */

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  padding-inline-start: 2px;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 0.65rem 0.8rem;
  border-radius: var(--radius-sm);
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.88rem;
  transition: all 0.2s ease;
  outline: none;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px var(--cyan-glow);
}

.field textarea {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--muted-2);
}

.field select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  padding-inline-end: 2rem;
}

[dir="rtl"] .field select {
  background-position: left 0.7rem center;
  padding-inline-end: 0.8rem;
  padding-inline-start: 2rem;
}

/* ============================================
   Grids
   ============================================ */

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;
}

@media (max-width: 480px) {
  .grid-3 {
    grid-template-columns: 1fr 1fr;
  }
}

/* ============================================
   Buttons
   ============================================ */

.primary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, var(--cyan), var(--cyan-dark));
  border: 1px solid transparent;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-glow);
}

.primary-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.35);
}

.primary-btn:active:not(:disabled) {
  transform: translateY(0);
}

.primary-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ============================================
   HVAC Card
   ============================================ */

.hvac-card {
  padding: 0.85rem 1rem;
  border-radius: var(--radius);
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(6, 182, 212, 0.02));
  border: 1px solid rgba(6, 182, 212, 0.2);
}

/* ============================================
   Composer
   ============================================ */

.composer {
  flex-shrink: 0;
  padding: 0.75rem 1rem;
  background: linear-gradient(180deg, rgba(10, 14, 26, 0.6) 0%, var(--bg-2) 100%);
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.tools-bar {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tool-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.tool-chip:hover {
  color: var(--text);
  border-color: var(--border-light);
}

.tool-chip.active {
  background: rgba(6, 182, 212, 0.12);
  border-color: var(--cyan);
  color: var(--cyan-light);
}

.input-row {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0.4rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease;
}

.input-row:focus-within {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px var(--cyan-glow);
}

.text-input {
  flex: 1;
  min-height: 40px;
  max-height: 160px;
  padding: 0.5rem 0.6rem;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.4;
  resize: none;
  outline: none;
  font-family: inherit;
}

.text-input::placeholder {
  color: var(--muted-2);
}

.mic-btn,
.send-btn {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.mic-btn {
  background: var(--bg-2);
  border: 1px solid var(--border);
  color: var(--muted);
}

.mic-btn:hover {
  color: var(--cyan-light);
  border-color: var(--cyan);
}

.mic-btn.listening {
  background: var(--error-bg);
  border-color: var(--error);
  color: var(--error);
  animation: pulse 1.2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
}

.send-btn {
  background: linear-gradient(135deg, var(--cyan), var(--cyan-dark));
  border: none;
  color: #fff;
  box-shadow: var(--shadow-glow);
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.05);
}

.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

/* ============================================
   Image Preview
   ============================================ */

.preview-wrap {
  position: relative;
  display: inline-block;
  max-width: 120px;
}

.preview-wrap img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  display: block;
}

.remove-img {
  position: absolute;
  top: -6px;
  inset-inline-end: -6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--error);
  border: 2px solid var(--bg);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.remove-img:hover {
  transform: scale(1.1);
}

/* ============================================
   Overlay & Drawer (History)
   ============================================ */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 50;
  display: flex;
  animation: fadeIn 0.2s ease;
}

.drawer {
  width: min(320px, 85vw);
  height: 100%;
  background: var(--bg-2);
  border-inline-end: 1px solid var(--border);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.25s ease;
  overflow: hidden;
}

@keyframes slideIn {
  from { transform: translateX(var(--slide-from, -100%)); }
  to { transform: translateX(0); }
}

[dir="ltr"] .drawer {
  --slide-from: -100%;
}

[dir="rtl"] .drawer {
  --slide-from: 100%;
}

/* ============================================
   History Items
   ============================================ */

.history-item {
  display: flex;
  align-items: stretch;
  gap: 0.4rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--card);
  overflow: hidden;
  transition: all 0.2s ease;
}

.history-item:hover {
  border-color: var(--border-light);
}

.history-item.active {
  border-color: var(--cyan);
  background: rgba(6, 182, 212, 0.06);
}

.history-btn {
  flex: 1;
  padding: 0.65rem 0.75rem;
  text-align: start;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  min-width: 0;
}

.history-title {
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.history-meta {
  font-size: 0.7rem;
  color: var(--muted);
}

.history-item .icon-btn {
  width: 36px;
  height: auto;
  border-radius: 0;
  border: none;
  border-inline-start: 1px solid var(--border);
  background: transparent;
}

.history-item .icon-btn:hover {
  color: var(--error);
  background: var(--error-bg);
}

/* ============================================
   Modal (Settings)
   ============================================ */

.modal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal {
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--bg-2);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: popIn 0.25s ease;
  scrollbar-width: thin;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.modal::-webkit-scrollbar {
  width: 6px;
}

.modal::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}

/* ============================================
   Spinner
   ============================================ */

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ============================================
   Range Input
   ============================================ */

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 3px;
  background: var(--border);
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--cyan);
  cursor: pointer;
  box-shadow: var(--shadow-glow);
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--cyan);
  cursor: pointer;
  border: none;
}

/* ============================================
   Checkbox
   ============================================ */

input[type="checkbox"] {
  accent-color: var(--cyan);
  cursor: pointer;
}

/* ============================================
   Mobile Adjustments
   ============================================ */

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .brand-owner {
    max-width: 150px;
    font-size: 0.65rem;
  }

  .bubble {
    max-width: 88%;
    font-size: 0.86rem;
  }

  .quick-grid {
    grid-template-columns: 1fr;
  }

  .grid-2 {
    grid-template-columns: 1fr;
  }

  .grid-3 {
    grid-template-columns: 1fr 1fr;
  }

  .tool-chip span {
    display: none;
  }

  .tool-chip {
    padding: 0.45rem;
  }

  .scroll-area {
    padding: 0.75rem;
    gap: 0.75rem;
  }

  .composer {
    padding: 0.6rem 0.75rem;
  }
}

/* ============================================
   Landscape / Height adjustments
   ============================================ */

@media (max-height: 500px) {
  .welcome-box {
    padding: 1rem 0.5rem;
  }

  .welcome-icon {
    width: 48px;
    height: 48px;
  }

  .welcome-box h1 {
    font-size: 1.2rem;
  }
}

/* ============================================
   Reduced Motion
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ============================================
   Safe Area (iOS notch)
   ============================================ */

@supports (padding: env(safe-area-inset-bottom)) {
  .composer {
    padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));
  }

  .header {
    padding-top: env(safe-area-inset-top);
  }
    }
