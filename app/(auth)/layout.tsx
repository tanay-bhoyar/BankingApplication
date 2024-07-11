import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              <Image 
                src="/icons/blue_horizon_4k.jpg"
                alt="Auth image"
                width={800}
                height={1000}
              />
            </div>
          </div>
      </main>
    );
  }
  