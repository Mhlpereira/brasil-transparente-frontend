const API_BASE = "http://localhost:8080";

export async function fetchFullData() {
    const [total, simplified, powers] = await Promise.all([
        fetch(`${API_BASE}/unidade-federativa/1/total-value-spent`).then(res => res.json()),
        fetch(`${API_BASE}/despesa-simplificada/1`).then(res => res.json()),
        fetch(`${API_BASE}/unidade-federativa/1/poderes`).then(res => res.json()),
    ]);
      return { total, simplified, powers };
}
