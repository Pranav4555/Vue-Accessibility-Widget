// src/api.js

const API_BASE = "http://localhost:8000/api"; // Change to your backend URL if needed

function getToken() {
  return localStorage.getItem('accessWidgetToken');
}

function setToken(token) {
  localStorage.setItem('accessWidgetToken', token);
}

function clearToken() {
  localStorage.removeItem('accessWidgetToken');
}

async function login(email, password) {
  const body = new URLSearchParams();
  body.append("username", email);
  body.append("password", password);

  const res = await fetch(`${API_BASE}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  setToken(data.access_token); // store JWT
  return data;
}

async function fetchSettings(domain) {
  const token = getToken();
  if (!token) throw new Error("No auth token");
  const res = await fetch(`${API_BASE}/settings/?domain=${encodeURIComponent(domain)}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Load settings failed");
  return res.json();
}

async function saveSettings(domain, settings_json) {
  const token = getToken();
  if (!token) throw new Error("No auth token");
  const res = await fetch(`${API_BASE}/settings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ domain, settings_json })
  });
  if (!res.ok) throw new Error("Save settings failed");
  return res.json();
}

async function sendEvent(domain, action_type, details = {}) {
  const token = getToken();
  if (!token) throw new Error("No auth token");
  return fetch(`${API_BASE}/event/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ domain, action_type, details })
  });
}

async function sendFeedback(domain, message) {
  const token = getToken();
  if (!token) throw new Error("No auth token");
  return fetch(`${API_BASE}/feedback/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ domain, message })
  });
}

export default {
  login,
  fetchSettings,
  saveSettings,
  sendEvent,
  sendFeedback,
  getToken,
  setToken,
  clearToken,
};
