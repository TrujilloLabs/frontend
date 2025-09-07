import { HttpAdapter } from "./HttpAdapter";

export class FetchAdapter implements HttpAdapter {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private async request<T>(url: string, options: RequestInit): Promise<T> {
        const res = await fetch(`${this.baseURL}${url}`, options);
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        return res.json();
    }

    get<T>(url: string): Promise<T> {
        return this.request<T>(url, { method: "GET" });
    }

    post<T>(url: string, body: any): Promise<T> {
        return this.request<T>(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
    }

    put<T>(url: string, body: any): Promise<T> {
        return this.request<T>(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
    }

    delete<T>(url: string): Promise<T> {
        return this.request<T>(url, { method: "DELETE" });
    }
}
