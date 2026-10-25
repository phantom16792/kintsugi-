const API_BASE = 'http://localhost:8000';

const statusEl = document.getElementById('status');
const healthBtn = document.getElementById('healthBtn');
const healthOut = document.getElementById('healthOut');
const askBtn = document.getElementById('askBtn');
const questionEl = document.getElementById('question');
const resultEl = document.getElementById('result');

async function checkBackend() {
  try {
    const r = await fetch(`${API_BASE}/health`);
    const data = await r.json();
    statusEl.textContent = data.ok ? 'Backend online ✅' : 'Backend reachable';
    statusEl.style.color = '#22d3ee';
  } catch(e){
    statusEl.textContent = 'Backend offline ❌ - ' + e.message;
    statusEl.style.color = '#f87171';
    console.error('Backend check failed', e);
  }
}

healthBtn.onclick = async () => {
  healthOut.textContent = 'loading...';
  try {
    const r = await fetch(`${API_BASE}/health`);
    const data = await r.json();
    healthOut.textContent = JSON.stringify(data, null, 2);
  } catch(e){
    healthOut.textContent = 'Error: ' + e.message;
  }
};

askBtn.onclick = async () => {
  const text = questionEl.value.trim();
  if(!text){ alert('Enter a question'); return; }
  resultEl.textContent = 'Sending...';
  // Note: real usage requires Supabase JWT. This demo shows the request shape.
  try {
    // Example unauthenticated health check
    const r = await fetch(`${API_BASE}/health`);
    const data = await r.json();
    resultEl.textContent = `Demo mode: Backend is ${data.ok ? 'up' : 'down'}.\n\nQuestion received:\n${text}\n\nIn production, POST /questions with Authorization: Bearer <token> is required.`;
  } catch(e){
    resultEl.textContent = 'Error: ' + e.message;
  }
};

checkBackend();
