export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <main>
        <nav className="text-green-200">Layout de store</nav>
        {children}
      </main>
    );
  }