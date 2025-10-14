// src/lib/analytics.ts
export type VisitResponse = {
  counted: boolean;
  newVisitorCookie?: boolean;
  page?: string;
  uniqueForPage?: number;
  uniqueTotal?: number;
  reason?: string;

  
};

export async function sendVisit(pagePath = window.location.pathname): Promise<VisitResponse | null> {
  try {
    const resp = await fetch('https://node-seq-mysql.onrender.com/api/visit', {
      method: 'POST',
      credentials: 'include', // important so cookie will be sent/received
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pagePath }),
    });
    if (!resp.ok) {
      console.warn('analytics sendVisit non-OK', resp.status);
      return null;
    }
    const json = (await resp.json()) as VisitResponse;
    return json;
  } catch (err) {
    // fail silently — do not break the UI
    console.error('sendVisit error', err);
    return null;
  }
}
