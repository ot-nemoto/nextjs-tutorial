import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Next.js',
};

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return <h1>Hello, Home page!</h1>;
}
